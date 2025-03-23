const quotes = {
    english: [
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
        { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
        { text: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
        { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
        { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
        { text: "It is not in the stars to hold our destiny but in ourselves.", author: "William Shakespeare" },
        { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
        // Add 40 more English quotes here...
    ],
    hindi: [
        { text: "सफलता अंतिम नहीं है, असफलता घातक नहीं है: यह साहस है जो मायने रखता है।", author: "विंस्टन चर्चिल" },
        { text: "महान कार्य करने का एकमात्र तरीका यह है कि आप जो करते हैं उससे प्यार करें।", author: "स्टीव जॉब्स" },
        { text: "आप जो सोचते हैं, वही बन जाते हैं।", author: "महात्मा गांधी" },
        { text: "कोशिश करने वालों की कभी हार नहीं होती।", author: "हरिवंश राय बच्चन" },
        { text: "हर नया दिन नई ताकत और नए विचार लाता है।", author: "एलेनोर रूजवेल्ट" },
        { text: "अगर आप सूरज की तरह चमकना चाहते हैं तो पहले सूरज की तरह जलना सीखें।", author: "डॉ. ए.पी.जे. अब्दुल कलाम" },
        { text: "आपकी मेहनत ही आपकी पहचान बनाती है।", author: "अज्ञात" },
        { text: "सपने वो नहीं जो आप नींद में देखते हैं, सपने वो होते हैं जो आपको सोने न दें।", author: "डॉ. ए.पी.जे. अब्दुल कलाम" },
        { text: "अपने लक्ष्य को ऊँचा रखो और तब तक मत रुको जब तक आप इसे प्राप्त नहीं कर लेते।", author: "स्वामी विवेकानंद" },
        { text: "कभी हार मत मानो, महान चीजें समय लेती हैं।", author: "अज्ञात" },
        // Add 40 more Hindi quotes here...
    ],
    marathi: [
        { text: "यश अंतिम नाही, अपयशही घातक नाही: महत्त्वाची गोष्ट म्हणजे धैर्याने पुढे जाणे.", author: "विन्स्टन चर्चिल" },
        { text: "उत्तम कार्य करण्याचा एकमेव मार्ग म्हणजे तुम्ही करत असलेल्या गोष्टींवर प्रेम करणे.", author: "स्टीव जॉब्स" },
        { text: "यश त्यालाच मिळते जो प्रयत्न करत राहतो.", author: "अज्ञात" },
        { text: "स्वप्न ते नव्हेत जी आपण झोपेत पाहतो, स्वप्न ती असतात जी आपल्याला झोपू देत नाहीत.", author: "डॉ. ए.पी.जे. अब्दुल कलाम" },
        { text: "श्रीमंत होण्याचा सर्वात चांगला मार्ग म्हणजे स्वतःमध्ये गुंतवणूक करणे.", author: "वॉरेन बफे" },
        { text: "आपण जे काही करू शकतो ते आजच करा, कारण उद्या कधीच येत नाही.", author: "अज्ञात" },
        { text: "प्रयत्न करा आणि अपयश पत्करा, पण प्रयत्न न करता हार मानू नका.", author: "अज्ञात" },
        { text: "सर्व शक्ती तुमच्या आत असते, तुम्ही काहीही करू शकता आणि प्राप्त करू शकता.", author: "स्वामी विवेकानंद" },
        { text: "तुमच्या स्वप्नांचा पाठलाग करा, कारण यशस्वी होण्याचा तोच मार्ग आहे.", author: "अज्ञात" },
        { text: "यश हे मेहनतीने मिळते, संधीच्या प्रतिक्षेत थांबून नाही.", author: "अज्ञात" },
        // Add 40 more Marathi quotes here...
    ]
};

function showQuote(language) {
    const randomIndex = Math.floor(Math.random() * quotes[language].length);
    const quote = quotes[language][randomIndex];
    document.getElementById("quote-text").innerText = `"${quote.text}"`;
    document.getElementById("quote-author").innerText = `- ${quote.author}`;
}
