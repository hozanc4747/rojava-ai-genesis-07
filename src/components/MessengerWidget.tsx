
import React, { useState } from 'react';

const MessengerWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMessenger = () => {
    setIsOpen(!isOpen);
  };

  const sendQuestion = (question: string) => {
    const messengerLink = `https://www.messenger.com/t/hoz37?text=${encodeURIComponent(question)}`;
    window.open(messengerLink, "_blank");
  };

  return (
    <>
      {/* زر ماسنجر الجانبي */}
      <div 
        id="messengerWidget" 
        onClick={toggleMessenger}
        className="fixed bottom-5 right-5 w-48 h-12 bg-blue-500/20 backdrop-blur-md rounded-lg shadow-lg shadow-cyan-500/50 flex items-center justify-between cursor-pointer transition-all duration-300 px-4 z-50 hover:bg-blue-500/50"
      >
        <div className="flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/83/Facebook_Messenger_4_Logo.svg" 
            width="40" 
            className="drop-shadow-lg filter brightness-0 invert" 
            alt="Messenger"
          />
        </div>
        <div className="text-white text-sm font-bold">💬 تواصل معنا</div>
      </div>

      {/* نافذة دردشة ماسنجر */}
      {isOpen && (
        <div 
          id="messengerPopup"
          className="fixed bottom-20 right-5 w-80 bg-blue-900/95 backdrop-blur-md rounded-2xl shadow-lg shadow-cyan-500/50 p-4 text-center z-50 font-sans"
        >
          <button 
            onClick={toggleMessenger}
            className="absolute top-2 right-3 bg-red-500 text-white border-none px-2 py-1 cursor-pointer text-sm rounded"
          >
            ❌
          </button>
          
          <h3 className="text-cyan-400 text-shadow mb-4">💬 دردشة ماسنجر</h3>
          
          {/* أزرار الأسئلة الجاهزة */}
          <div className="flex flex-col gap-2 mb-4">
            <button 
              onClick={() => sendQuestion('ما هي خدمات المدونة؟')}
              className="p-2 border-none rounded bg-cyan-500/50 text-white cursor-pointer text-sm shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:bg-cyan-400 hover:text-black w-full"
            >
              ❓ ما هي المدونة؟
            </button>
            <button 
              onClick={() => sendQuestion('كيف يمكنني التواصل معكم؟')}
              className="p-2 border-none rounded bg-cyan-500/50 text-white cursor-pointer text-sm shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:bg-cyan-400 hover:text-black w-full"
            >
              📞 كيف أتواصل معكم؟
            </button>
            <button 
              onClick={() => sendQuestion('هل هناك محتوى جديد قادم؟')}
              className="p-2 border-none rounded bg-cyan-500/50 text-white cursor-pointer text-sm shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:bg-cyan-400 hover:text-black w-full"
            >
              📆 هل هناك تحديثات؟
            </button>
          </div>

          {/* زر فتح الدردشة في ماسنجر */}
          <a 
            href="https://www.messenger.com/t/hoz37" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center p-3 bg-blue-600/80 text-white no-underline rounded shadow-lg shadow-cyan-500/50 text-base transition-all duration-300 hover:bg-cyan-400 hover:text-black"
          >
            🔗 افتح الدردشة
          </a>
        </div>
      )}
    </>
  );
};

export default MessengerWidget;
