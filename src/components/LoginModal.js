import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./Dialog";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./input-otp";
import { toast } from "../hooks/use-toast";

const LoginModal = ({ open, onOpenChange, onLoginSuccess }) => {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const validatePhone = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, "");
    return cleaned.length === 10;
  };

  const handleSendOTP = () => {
    if (!validatePhone(phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // In production: call /auth/send-otp API
      toast({
        title: "OTP Sent",
        description: `A 6-digit OTP has been sent to +91 ${phone}`,
      });
      setStep("otp");
      setTimer(30);
      setIsLoading(false);
    }, 1000);
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the complete 6-digit OTP",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // In production: call /auth/verify-otp API
      // For demo: accept any 6-digit OTP
      const userData = {
        phone: `+91${phone}`,
        token: `mock-token-${Date.now()}`,
        isNewUser: Math.random() > 0.5, // Randomly simulate new/existing user
      };

      // Store session
      localStorage.setItem("userSession", JSON.stringify(userData));
      
      if (userData.isNewUser) {
        toast({
          title: "Welcome to Green Junction!",
          description: "Your account has been created successfully",
        });
      } else {
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
      }

      onLoginSuccess(userData.phone);
      onOpenChange(false);
      setIsLoading(false);
      
      // Reset state
      setStep("phone");
      setPhone("");
      setOtp("");
    }, 1000);
  };

  const handleResendOTP = () => {
    if (timer > 0) return;
    
    toast({
      title: "OTP Resent",
      description: `A new OTP has been sent to +91 ${phone}`,
    });
    setTimer(30);
    // In production: call /auth/send-otp API again
  };

  const handleBack = () => {
    setStep("phone");
    setOtp("");
    setTimer(0);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Login / Sign Up</DialogTitle>
          <DialogDescription>
            Access your account to manage orders, sites, and services
          </DialogDescription>
        </DialogHeader>

        {step === "phone" ? (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Mobile Number</Label>
              <div className="flex gap-2">
                <div className="flex items-center justify-center px-3 py-2 border border-input bg-muted rounded-md text-sm">
                  +91
                </div>
                <Input
                  id="phone"
                  placeholder="Enter your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  maxLength={10}
                  className="flex-1"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                We'll send you a 6-digit OTP to verify your number
              </p>
            </div>

            <Button 
              className="w-full" 
              onClick={handleSendOTP}
              disabled={isLoading || !validatePhone(phone)}
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </Button>
          </div>
        ) : (
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Enter OTP</Label>
              <p className="text-sm text-muted-foreground">
                Enter the 6-digit OTP sent to +91 {phone}
              </p>
              <div className="flex justify-center py-4">
                <InputOTP 
                  maxLength={6} 
                  value={otp} 
                  onChange={setOtp}
                  onComplete={handleVerifyOTP}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button 
                className="w-full" 
                onClick={handleVerifyOTP}
                disabled={isLoading || otp.length !== 6}
              >
                {isLoading ? "Verifying..." : "Verify OTP"}
              </Button>
              
              <Button
                variant="ghost"
                className="w-full"
                onClick={handleResendOTP}
                disabled={timer > 0}
              >
                {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
              </Button>

              <Button
                variant="outline"
                className="w-full"
                onClick={handleBack}
              >
                Change Number
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;