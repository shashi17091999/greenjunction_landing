import { MessageCircle, X } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatWidget = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleTrackOrder = () => {
    setIsOpen(false);
    navigate("/my-orders");
  };

  const handleInstallationSupport = () => {
    setIsOpen(false);
    navigate("/contact");
  };

  const handleChatWithExpert = () => {
    window.open("https://wa.me/918001234567", "_blank");
  };

  const handleRequestCallback = () => {
    setIsOpen(false);
    navigate("/contact");
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl z-50 animate-float"
        variant="cta"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 z-50 shadow-2xl animate-scale-in flex flex-col">
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold">Need Help?</h3>
            <p className="text-xs text-primary-foreground/80">We're here to assist you</p>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-muted/30">
            <div className="space-y-3">
              <div className="bg-background p-3 rounded-lg shadow-sm">
                <p className="text-sm">👋 Hi! How can we help you today?</p>
              </div>

              <div className="bg-background p-3 rounded-lg shadow-sm">
                <p className="text-sm font-medium mb-2">Quick Options:</p>

                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-xs"
                    onClick={handleTrackOrder}
                  >
                    📦 Track my order
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-xs"
                    onClick={handleInstallationSupport}
                  >
                    🔧 Installation support
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-xs"
                    onClick={handleChatWithExpert}
                  >
                    💬 Chat with expert
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-start text-xs"
                    onClick={handleRequestCallback}
                  >
                    📞 Request callback
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 border-t">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span>Usually replies instantly</span>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatWidget;
