"use client" 
/* @refresh disable */
import Header from '@/app/Components/UserHeader';
import { trace } from 'next/dist/trace';
"@UserHeader"
import React, { useState } from 'react';

const aboutPage = () => {
  // const [showHistory, setShowHistory] = useState(false);

  // const handleAboutClick = () => {
  //   setShowHistory(!showHistory); // Toggle the showHistory state on button click
  // };
  const [isTranslated, setIsTranslated] = useState(false);
  const boxStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '5px',
    color: 'brown',
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };
  const translateButtonStyle = {
    backgroundColor: 'grey',
    color: 'black',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };
  const translateToKannada = () => {
    // Simulated translation logic (replace with actual translation service)
    setIsTranslated(!isTranslated); // Toggle translation state
  };
  const toggleTranslation = () => {
    setIsTranslated(!isTranslated);
  };
  const kannadaContent = (
    <div style={boxStyle}>
      <h1><strong>ಬಸವನಮೂಲ: ಭಕ್ತಿಯ ಐತಿಹಾಸಿಕ ಕೇಂದ್ರ</strong></h1>

      <section>
        <div>
          {/* Kannada translated content */}
          {/* Replace with your translated Kannada content */}
          <h2>ಇತಿಹಾಸ ಪ್ರಸಿದ್ಧ ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಮಣ್ಯ ದೇವಸ್ಥಾನದ ಸಮೀಪದ ಹಸಿರು ಸಿರಿಯ ಕುಮಾರ ಪರ್ವತದ ತಪ್ಪಲಿನ ಕುಮಾರಧಾರ ನದಿಯ ತಟದ ಪೌರಾಣಿಕ ಹಾಗೂ ಐತಿಹಾಸಿಕ ಹಿನ್ನಲೆ ಇರುವ ಕುಲ್ಕುಂದ ಬಸವನ ಮೂಲ ಎಂಬ ಸ್ಥಳವು ಅನೇಕ ವರ್ಷಗಳಿಂದ ಸಾವಿರಾರು ಜನರ ಶ್ರದ್ಧಾ ಕೇಂದ್ರವಾಗಿ ಜಾನುವಾರು ಜಾತ್ರೆಯ ರೂಪದಲ್ಲಿ ವಿನಿಮಯ ಮಾರಾಟವಾಗುತ್ತಿದ್ದ ಪ್ರದೇಶವಾಗಿತ್ತು. ಇಂತಹ ಐತಿಹಾಸಿಕ ಸ್ಥಳವಾದ ಕುಲ್ಕುಂದ ಬಸವನ ಮೂಲದಲ್ಲಿ ಕಾಡಿನ ಮಧ್ಯದಲ್ಲಿ ಬಸವನ ಹಣೆಯಲ್ಲಿ ಶಿವಲಿಂಗ ವಿರುವ ಸುಂದರ ಬಸವೇಶ್ವರ ದೇವಾಲಯವಿದೆ.

ಸ್ಕಂದ ಪುರಾಣ ಉಲ್ಲೇಖದಂತೆ, ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ತಾರಕಾಸುರನೇ ಮೊದಲಾದ ರಕ್ಕಸರನ್ನು ಧನುರ್ವಿದ್ಯೆ ಯಲ್ಲಿ ಸಂಹಾರ ಮಾಡಿದಾಗ, ಮರುಜೀವ ಪಡೆದು ಯುದ್ಧಕ್ಕೆ ಬರುತ್ತಿದ್ದುದನ್ನು ಕಂಡು ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ಶಿವನ ಕುರಿತು ತಪಸ್ಸು ಮಾಡಿದ ಅವಾಗ, ಸಾಕ್ಷಾತ್ ಶ್ರೀ ಮಹಾದೇವನೇ ನಂದೀ ಸ್ವರೂಪದಲ್ಲಿ ಪ್ರತ್ಯಕ್ಷನಾಗಿ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಗೆ ನಂದಿ ವಿದ್ಯೆಯೇ ಮೊದಲಾಗಿ ಶಸ್ತ್ರ ವಿದ್ಯೆಯನ್ನು ಬೋಧಿಸಿದರು ಎಂದು ಪುರಾಣದಲ್ಲಿ ತಿಳಿಯಪಡುತ್ತದೆ.

ಒಂದು ಕಾಲದಲ್ಲಿ ರಾಜ್ಯದಾದ್ಯಂತ ಭಕ್ತರನ್ನು ಆಕರ್ಷಿಸಿ ಕುಕ್ಕೆ ಕ್ಷೇತ್ರ ಹಾಗೂ ಬಸವೇಶ್ವರ ದೇವರ ಕೃಪಾಶಯದಲ್ಲಿ ಕೃಪಾಶಯದಲ್ಲಿ ಲಕ್ಷಗಟ್ಟಲೆ ಜಾನುವಾರುಗಳನ್ನು ತಂದು ವ್ಯಾಪಾರ ವಿನಿಮಯ #విదు. ಮಾಡಿಕೊಳ್ಳುತ್ತಿದ್ದ ಸ್ಥಳವಿದು.

ಕಾರ್ತಿಕ ಹುಣ್ಣಿಮೆಯಿಂದ ಮೊದಲಗೊಂಡು 15 ದಿವಸಗಳ ಕಾಲ ನಡೆಯುತ್ತಿದ್ದ ವೈಭವದ ಚಾರಿತ್ರಿಕ ಹಿನ್ನೆಲೆಯುಳ್ಳ "ಜಾನುವಾರು ಜಾತ್ರೆ'ಯು ಕಾಲಕ್ರಮೇಣ ಬೇರೆ ಬೇರೆ ಕಾರಣಗಳಿಂದ ಜಾನುವಾರು ಜಾತ್ರೆಯು ಕೇವಲ ಆರಾಧನೆಗೆ ಮಾತ್ರ ಸೀಮಿತವಾಯಿತು. ಇವತ್ತಿಗೂ ಕಾರ್ತಿಕ ಹುಣ್ಣಿಮೆಯ ದಿವಸ ಜಾನುವಾರು ಜಾತ್ರೆಯ ಅಂಗವಾಗಿ ಬಸವನ ಮೂಲ ಕ್ಷೇತ್ರದಲ್ಲಿ, ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಮಣ್ಯ ದೇವಸ್ಥಾನದ ವತಿಯಿಂದ, ಗೋ ಪೂಜಾ ಹಾಗೂ ಗೋಗ್ರಾಸ ಸಮರ್ಪಣೆ ಮಾಡಿಕೊಂಡು ಬರುವುದು ರೂಡಿಯಲ್ಲಿದೆ. ಬಸವನ ಮೂಲ ಕ್ಷೇತ್ರದಲ್ಲಿ ಗೋ ಪೂಜಾ ನಂತರದಲ್ಲಿಯೇ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯ ಚಂಪಾ ಷಷ್ಠಿಯ ಬ್ರಹ್ಮ ರಥವನ್ನು ಕಟ್ಟುವ ಕೆಲಸಗಳು ಪ್ರಾರಂಭ ಮಾಡುತ್ತಾರೆ

ಸುಮಾರು 800 ವರ್ಷಗಳ ಹಿಂದೆ ಕೆಳದಿ ರಾಜರಾದ ಶಿವಪ್ಪ ನಾಯಕ, ಸೂರಪ್ಪ ನಾಯಕ ಎಂಬ ರಾಜರುಗಳು "ಕದಂಬಸಂಸ್ಥಾನ" (ಕಡಬ)ವನ್ನು ಆಳುತ್ತಿದ್ದರು ಎಂಬುದು ಇತಿಹಾಸದಲ್ಲಿ ತಿಳಿದು ಬರುತ್ತದೆ. ಅವರುಗಳು ಶ್ರೀ ಬಸವನ ಮೂಲ ಹಾಗೂ ಕುಲ್ಕುಂದ ಇತಿಹಾಸವನ್ನು ತಿಳಿದು ಹಣೆಯಲ್ಲಿ ಶಿವಲಿಂಗವಿರುವ ಬಸವನನ್ನು ಕಂಡು ಪ್ರೇರೇಪಿತರಾಗಿ ಅವರ ಕಾಲಘಟ್ಟದಲ್ಲಿಯೇ ಪ್ರತಿಷ್ಠಾಪಿಸಿದ್ದರು ಎಂಬುದು ಕೂಡ ಅಷ್ಟಮಂಗಲ ಚಿಂತನೆಯಲ್ಲಿ ತಿಳಿದು ಬಂದಿರುತ್ತದೆ. ಆನಂತರದ ವರ್ಷಗಳಲ್ಲಿ ಸಿಡುಬು ರೋಗ ಮಹಾಮಾರಿಯಿಂದ ಸಂಪೂರ್ಣ ಕುಕ್ಕೆ ಪಟ್ಟಣ ನಾಶ ಹೊಂದಿತು. ನಂತರ ಬ್ರಿಟಿಷ್ ಆಳ್ವಿಕೆಯಲ್ಲಿ ಹಾಗೆಯೇ ಮುಂದುವರೆಯಿತು. ಇತ್ತೀಚಿನ ಕಾಲಘಟ್ಟದಲ್ಲಿ ಶಿವಲಿಂಗವಿರುವ ಶ್ರೀ ಬಸವೇಶ್ವರರನ್ನು ಕಾಡಿನ ಮದ್ಯದಲ್ಲಿ ಇದ್ದುದನ್ನು ಕಂಡ ಈ ಪ್ರದೇಶದ ಹಿರಿಯ ಭಕ್ತ ಜನರು ಒಂದು ಮರದ ಬುಡದಲ್ಲಿ ಕೂರಿಸಿ ಭಕ್ತಿಯ ಆರಾಧನೆ

ಮಾಡುತ್ತಿದ್ದು ಈಗಲೂ ಹಿರಿಯರು ನೆನಪಿಸುತ್ತಾರೆ ಕಾಲಕ್ರಮೇಣ ಉತ್ತಮ ದೈವಜ್ಞ ಮುಖೇನ ಅಷ್ಟಮಂಗಲ ಪ್ರಶ್ನೆಚಿಂತನೆ ನಡೆಸಿ ಸಂಪೂರ್ಣ ಜೀರ್ಣೋದ್ಧಾರ ಮಾಡಿ ಪುನಃ ಪ್ರತಿಷ್ಠಾಪಿಸಲಾಯಿತು.

ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವರ ದರ್ಶನ ಪಡೆದು ನಂತರ ಶ್ರೀ ಬಸವೇಶ್ವರ (ನಂದೀಶ್ವರ)ದೇವರ ದರ್ಶನ ಪಡೆದು ಪ್ರಾರ್ಥನೆ ಸಲ್ಲಿಸಿದಲ್ಲಿ ಪೂರ್ಣ ಫಲ ಲಭಿಸುವುದು.

ಭಕ್ತರ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಅನುಗ್ರಹಿಸಲೆಂದೇ ಬಸವನ ಮೂಲದಲ್ಲಿ ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವರು ನೆಲೆಸಿದ್ದಾರೆ ಎಂಬುದು ಸಾವಿರಾರು ಭಕ್ತರ ನಂಬಿಕೆಯಾಗಿದೆ</h2>
          {/* ... */}
        </div>
      </section>
    </div>
  );
  const contentToDisplay = isTranslated ? kannadaContent : englishContent;
return (
  <div className="container" style={containerStyle}>
      
      <nav>
        <ul>
        {/* <Header onAboutClick={handleAboutClick} /> */}
        <button onClick={translateToKannada}>Translate</button>
        <button onClick={toggleTranslation} style={{ backgroundColor: 'grey', color: 'black' }}>
        Translate
      </button>
        </ul>
      </nav>
      
      {  (
        <div style={boxStyle}>
          <h1><strong>Basavanamoola: A Historical Hub of Devotion</strong></h1>

          <section>
            <div>
              <h2>Located on the bank of the Kumaradhara River, at the foothills of Kumara Parvata, Basavanamoola is steeped in legendary and historical significance. It was once a thriving area where a vibrant cattle fair took place, attracting thousands of devotees from across the state. The area boasted the Basaveshwara temple, nestled amidst the forest, featuring a unique 'Shivalinga' on Basava's forehead.</h2>

              <h2>Historical Significance:</h2>
              <p>According to 'Skanda Purana,' it is believed that Lord Sri Subrahmanya Swami performed penance on Lord Shiva at this site. The area witnessed a bustling 15-day cattle fair during Kartika masa (around November), gradually evolving into a place primarily dedicated to worship.</p>

              <h2>Cultural Traditions:</h2>
              <p>Even today, during Kartika masa, Basavanamoola observes cow pooja and gogras (feeding cows) as part of the cattle fair tradition. The construction of Lord Sri Subrahmanya Swamy's Champa Shasthi Brahma Ratha commences after the Go Puja (cow worship).</p>

              <h2>Historical Figures and Influence:</h2>
              <p>About 800 years ago, during the rule of Keladi kings Shivappa Nayaka and Surappa Nayaka in Kadambasamsthan (Kadaba), the significance of Basaveshwara and Kulkunda's history was acknowledged by the royal family. Despite facing adversities such as a smallpox epidemic, the devotion to Lord Basaveshwara endured, with devotees constructing a statue for worship.</p>

              <h2>Restoration and Worship:</h2>
              <p>A dedicated theologian played a crucial role in renovating and re-establishing the temple through Ashtamangala rituals.</p>

              <h2>Spiritual Significance:</h2>
              <p>It's believed that visiting Lord Kukke Subrahmanya and then seeking darshan of Lord Sri Basaveshwara (Nandishwara) while offering prayers brings complete fulfillment for devotees' wishes. Devotees firmly believe that Lord Basaveshwara resides at Basavanmoola and grants the sincere desires of his devotees.</p>
            </div>
          </section>
          </div>
          
       
      )}

      { (
        <div>
          {/* Content when "About Us" is not clicked */}
          {/* <h2>Welcome</h2>
          <p>Click on "About" to discover the historical significance of Basavanamoola.</p> */}
        </div>
      )}
    </div>
  );
};
const englishContent= (
  <div>
    <h2>Located on the bank of the Kumaradhara River, at the foothills of Kumara Parvata, Basavanamoola is steeped in legendary and historical significance. It was once a thriving area where a vibrant cattle fair took place, attracting thousands of devotees from across the state. The area boasted the Basaveshwara temple, nestled amidst the forest, featuring a unique 'Shivalinga' on Basava's forehead.</h2>

<h2>Historical Significance:</h2>
<p>According to 'Skanda Purana,' it is believed that Lord Sri Subrahmanya Swami performed penance on Lord Shiva at this site. The area witnessed a bustling 15-day cattle fair during Kartika masa (around November), gradually evolving into a place primarily dedicated to worship.</p>

<h2>Cultural Traditions:</h2>
<p>Even today, during Kartika masa, Basavanamoola observes cow pooja and gogras (feeding cows) as part of the cattle fair tradition. The construction of Lord Sri Subrahmanya Swamy's Champa Shasthi Brahma Ratha commences after the Go Puja (cow worship).</p>

<h2>Historical Figures and Influence:</h2>
<p>About 800 years ago, during the rule of Keladi kings Shivappa Nayaka and Surappa Nayaka in Kadambasamsthan (Kadaba), the significance of Basaveshwara and Kulkunda's history was acknowledged by the royal family. Despite facing adversities such as a smallpox epidemic, the devotion to Lord Basaveshwara endured, with devotees constructing a statue for worship.</p>

<h2>Restoration and Worship:</h2>
<p>A dedicated theologian played a crucial role in renovating and re-establishing the temple through Ashtamangala rituals.</p>

<h2>Spiritual Significance:</h2>
<p>It's believed that visiting Lord Kukke Subrahmanya and then seeking darshan of Lord Sri Basaveshwara (Nandishwara) while offering prayers brings complete fulfillment for devotees' wishes. Devotees firmly believe that Lord Basaveshwara resides at Basavanmoola and grants the sincere desires of his devotees.</p>
  </div>
);
return (
  <div className="container" style={containerStyle}>
    <nav>
      <ul>
        {/* Header component or any other content */}
        {/* ... */}
      </ul>
    </nav>

    {/* Translate button */}
    <button onClick={toggleTranslation} style={translateButtonStyle}>
        {isTranslated ? 'Translate to English' : 'Translate to Kannada'}
      </button>

    {/* Content display based on translation state */}
    {isTranslated ? kannadaContent : (
      <div style={boxStyle}>
        {/* English content */}
        {/* ... */}
      </div>
    )}
  </div>
);

export default aboutPage
