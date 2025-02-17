import { useEffect, useCallback } from 'react';

const TelegramLogin = () => {
  const handleTelegramCallback = useCallback((user:any) => {
    // Handle the user data returned from Telegram
    console.log('Telegram user data:', user);
    
  }, []);

  useEffect(() => {
    // Add Telegram script
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'testindevbot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-userpic', 'true');
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-auth-url', 'https://kolpad.xyz/');
    
    // Create callback function in global scope
    window.onTelegramAuth = handleTelegramCallback;
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');

    // Add script to document
    const container = document.getElementById('tg-login');
    if (container) {
      container.appendChild(script);
    }

    // Cleanup
    return () => {
      if (container) {
        container.removeChild(script);
      }
      delete window.onTelegramAuth;
    };
  }, []);

  return (
    <div id="tg-login" />
  );
};

export default TelegramLogin;