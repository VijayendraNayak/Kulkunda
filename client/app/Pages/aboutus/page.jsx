"use client";
import { useState } from "react";
import Loader from "../../Components/Loader"
const page = () => {
  const [lang, setLang] = useState("english");
  const [loader, setLoader] = useState(false);

  const handleonclick = () => {
    setLoader(true);
    if (lang === "english") {
      setLang("kannada");
      setLoader(false);
    } else {
      setLang("english");
      setLoader(false);
    }
  };
  return (
    <div className="pt-10 pb-10 lg:pt-20 ">
      {loader && <Loader/>}
      <div className="flex justify-between items-center pb-5">
        <p className="text-3xl lg:text-5xl text-center font-semibold text-orange-500 p-4">
          About Us
        </p>
        <button
          type="button"
          className="border-2 border-orange-500 bg-orange-300 px-5 py-3 rounded-full ml-auto mr-10 hover:bg-orange-400"
          onClick={handleonclick}
        >
          {lang === "english" ? "ಕನ್ನಡ" : "English"}
        </button>
      </div>

      <div
        className={`flex flex-col gap-4 px-4 md:px-8 ${
          lang === "english" ? "flex" : "hidden"
        }`}
      >
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full md:h-60 rounded-3xl p-2">
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center ">
              Historical Significance
            </span>
            <p className="text-sm md:text-base lg:text-lg text-center">
              According to 'Skanda Purana,' it is believed that Lord Sri
              Subrahmanya Swami performed penance on Lord Shiva at this site.
              The area witnessed a bustling 15-day cattle fair during Kartika
              masa (around November), gradually evolving into a place primarily
              dedicated to worship.
            </p>
          </div>
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="image here"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full md:h-60 rounded-3xl p-2">
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="image here"
            />
          </div>
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
              Restoration and Worship
            </span>
            <p className="text-sm md:text-base lg:text-lg text-center">
              A dedicated theologian played a crucial role in renovating and
              re-establishing the temple through Ashtamangala rituals.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full md:h-60 rounded-3xl p-2">
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
              Historical Significance
            </span>
            <p className="text-sm md:text-base lg:text-lg text-center">
              According to 'Skanda Purana,' it is believed that Lord Sri
              Subrahmanya Swami performed penance on Lord Shiva at this site.
              The area witnessed a bustling 15-day cattle fair during Kartika
              masa (around November), gradually evolving into a place primarily
              dedicated to worship.
            </p>
          </div>
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="image here"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full h-60 rounded-3xl p-2">
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="image here"
            />
          </div>
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
              Cultural Traditions
            </span>
            <p className="text-sm md:text-base lg:text-lg text-center">
              Even today, during Kartika masa, Basavanamoola observes cow pooja
              and gogras (feeding cows) as part of the cattle fair tradition.
              The construction of Lord Sri Subrahmanya Swamy's Champa Shasthi
              Brahma Ratha commences after the Go Puja (cow worship).
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full h-60 rounded-3xl p-2">
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
              Historical Figures and Influence
            </span>
            <p className="text-sm md:text-base lg:text-lg text-center">
              About 800 years ago, during the rule of Keladi kings Shivappa
              Nayaka and Surappa Nayaka in Kadambasamsthan (Kadaba), the
              significance of Basaveshwara and Kulkunda's history was
              acknowledged by the royal family. Despite facing adversities such
              as a smallpox epidemic, the devotion to Lord Basaveshwara endured,
              with devotees constructing a statue for worship.
            </p>
          </div>
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="image here"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full h-60 rounded-3xl p-2">
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="image here"
            />
          </div>
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
              Spiritual Significance
            </span>
            <p className="text-sm md:text-base lg:text-lg text-center">
              It's believed that visiting Lord Kukke Subrahmanya and then
              seeking darshan of Lord Sri Basaveshwara (Nandishwara) while
              offering prayers brings complete fulfillment for devotees' wishes.
              Devotees firmly believe that Lord Basaveshwara resides at
              Basavanmoola and grants the sincere desires of his devotees.
            </p>
          </div>
        </div>
      </div>

      {/* Kannada  */}
      <div
        className={`flex flex-col gap-4 px-4 md:px-8 ${
          lang === "kannada" ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full  rounded-3xl p-2">
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center ">
              ಕ್ಷೇತ್ರದ ಇತಿಹಾಸ ಹಾಗು ಪರಿಚಯ
            </span>
            <p className="text-sm md:text-base lg:text-lg text-center">
              ಇತಿಹಾಸ ಪ್ರಸಿದ್ಧ ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಮಣ್ಯ ದೇವಸ್ಥಾನದ ಸಮೀಪದ ಹಸಿರು ಸಿರಿಯ
              ಕುಮಾರ ಪರ್ವತದ ತಪ್ಪಲಿನ ಕುಮಾರಧಾರ ನದಿಯ ತಟದ ಪೌರಾಣಿಕ ಹಾಗೂ ಐತಿಹಾಸಿಕ
              ಹಿನ್ನಲೆ ಇರುವ ಕುಲ್ಕುಂದ ಬಸವನ ಮೂಲ ಎಂಬ ಸ್ಥಳವು ಅನೇಕ ವರ್ಷಗಳಿಂದ ಸಾವಿರಾರು
              ಜನರ ಶ್ರದ್ಧಾ ಕೇಂದ್ರವಾಗಿ ಜಾನುವಾರು ಜಾತ್ರೆಯ ರೂಪದಲ್ಲಿ ವಿನಿಮಯ
              ಮಾರಾಟವಾಗುತ್ತಿದ್ದ ಪ್ರದೇಶವಾಗಿತ್ತು. ಇಂತಹ ಐತಿಹಾಸಿಕ ಸ್ಥಳವಾದ ಕುಲ್ಕುಂದ
              ಬಸವನ ಮೂಲದಲ್ಲಿ ಕಾಡಿನ ಮಧ್ಯದಲ್ಲಿ ಬಸವನ ಹಣೆಯಲ್ಲಿ ಶಿವಲಿಂಗ ವಿರುವ ಸುಂದರ
              ಬಸವೇಶ್ವರ ದೇವಾಲಯವಿದೆ.
            </p>
          </div>
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="image here"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full  rounded-3xl p-2">
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="image here"
            />
          </div>
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
              ಪೌರಾಣಿಕ ಹಿನ್ನೆಲೆ
            </span>
            <p className="text-sm md:text-base lg:text-lg text-center">
              ಸ್ಕಂದ ಪುರಾಣ ಉಲ್ಲೇಖದಂತೆ, ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ತಾರಕಾಸುರನೇ
              ಮೊದಲಾದ ರಕ್ಕಸರನ್ನು ಧನುರ್ವಿದ್ಯೆ ಯಲ್ಲಿ ಸಂಹಾರ ಮಾಡಿದಾಗ, ಮರುಜೀವ ಪಡೆದು
              ಯುದ್ಧಕ್ಕೆ ಬರುತ್ತಿದ್ದುದನ್ನು ಕಂಡು ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯು ಶಿವನ
              ಕುರಿತು ತಪಸ್ಸು ಮಾಡಿದ ಅವಾಗ, ಸಾಕ್ಷಾತ್ ಶ್ರೀ ಮಹಾದೇವನೇ ನಂದೀ ಸ್ವರೂಪದಲ್ಲಿ
              ಪ್ರತ್ಯಕ್ಷನಾಗಿ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಗೆ ನಂದಿ ವಿದ್ಯೆಯೇ ಮೊದಲಾಗಿ
              ಶಸ್ತ್ರ ವಿದ್ಯೆಯನ್ನು ಬೋಧಿಸಿದರು ಎಂದು ಪುರಾಣದಲ್ಲಿ ತಿಳಿಯಪಡುತ್ತದೆ.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full  rounded-3xl p-2">
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
              ಪಾರಂಪರಿಕ ಪದ್ಧತಿ
            </span>
            <p className="text-sm md:text-base lg:text-lg text-center">
              ಒಂದು ಕಾಲದಲ್ಲಿ ರಾಜ್ಯದಾದ್ಯಂತ ಭಕ್ತರನ್ನು ಆಕರ್ಷಿಸಿ ಕುಕ್ಕೆ ಕ್ಷೇತ್ರ ಹಾಗೂ
              ಬಸವೇಶ್ವರ ದೇವರ ಕೃಪಾಶಯದಲ್ಲಿ ಕೃಪಾಶಯದಲ್ಲಿ ಲಕ್ಷಗಟ್ಟಲೆ ಜಾನುವಾರುಗಳನ್ನು
              ತಂದು ವ್ಯಾಪಾರ ವಿನಿಮಯ ಮಾಡಿಕೊಳ್ಳುತ್ತಿದ್ದ ಸ್ಥಳವಿದು. ಕಾರ್ತಿಕ
              ಹುಣ್ಣಿಮೆಯಿಂದ ಮೊದಲಗೊಂಡು 15 ದಿವಸಗಳ ಕಾಲ ನಡೆಯುತ್ತಿದ್ದ ವೈಭವದ ಚಾರಿತ್ರಿಕ
              ಹಿನ್ನೆಲೆಯುಳ್ಳ "ಜಾನುವಾರು ಜಾತ್ರೆ'ಯು ಕಾಲಕ್ರಮೇಣ ಬೇರೆ ಬೇರೆ ಕಾರಣಗಳಿಂದ
              ಜಾನುವಾರು ಜಾತ್ರೆಯು ಕೇವಲ ಆರಾಧನೆಗೆ ಮಾತ್ರ ಸೀಮಿತವಾಯಿತು. ಇವತ್ತಿಗೂ
              ಕಾರ್ತಿಕ ಹುಣ್ಣಿಮೆಯ ದಿವಸ ಜಾನುವಾರು ಜಾತ್ರೆಯ ಅಂಗವಾಗಿ ಬಸವನ ಮೂಲ
              ಕ್ಷೇತ್ರದಲ್ಲಿ, ಕುಕ್ಕೆ ಶ್ರೀ ಸುಬ್ರಮಣ್ಯ ದೇವಸ್ಥಾನದ ವತಿಯಿಂದ, ಗೋ ಪೂಜಾ
              ಹಾಗೂ ಗೋಗ್ರಾಸ ಸಮರ್ಪಣೆ ಮಾಡಿಕೊಂಡು ಬರುವುದು ರೂಡಿಯಲ್ಲಿದೆ. ಬಸವನ ಮೂಲ
              ಕ್ಷೇತ್ರದಲ್ಲಿ ಗೋ ಪೂಜಾ ನಂತರದಲ್ಲಿಯೇ ಶ್ರೀ ಸುಬ್ರಹ್ಮಣ್ಯ ಸ್ವಾಮಿಯ ಚಂಪಾ
              ಷಷ್ಠಿಯ ಬ್ರಹ್ಮ ರಥವನ್ನು ಕಟ್ಟುವ ಕೆಲಸಗಳು ಪ್ರಾರಂಭ ಮಾಡುತ್ತಾರೆ
            </p>
          </div>
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="image here"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 border-2 border-orange-500 bg-orange-100 w-full rounded-3xl p-2">
          <div className="w-full md:w-1/4 p-1 rounded-lg">
            <img
              className="w-full h-full object-cover"
              src=""
              alt="image here"
            />
          </div>
          <div className="w-full md:w-3/4 p-2 gap-2 flex flex-col">
            <span className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
              ಐತಿಹಾಸಿಕ ಹಿನ್ನೆಲೆ
            </span>
            <p className="text-sm md:text-base lg:text-lg text-center">
              ಸುಮಾರು 800 ವರ್ಷಗಳ ಹಿಂದೆ ಕೆಳದಿ ರಾಜರಾದ ಶಿವಪ್ಪ ನಾಯಕ, ಸೂರಪ್ಪ ನಾಯಕ ಎಂಬ
              ರಾಜರುಗಳು "ಕದಂಬಸಂಸ್ಥಾನ" (ಕಡಬ)ವನ್ನು ಆಳುತ್ತಿದ್ದರು ಎಂಬುದು ಇತಿಹಾಸದಲ್ಲಿ
              ತಿಳಿದು ಬರುತ್ತದೆ. ಅವರುಗಳು ಶ್ರೀ ಬಸವನ ಮೂಲ ಹಾಗೂ ಕುಲ್ಕುಂದ ಇತಿಹಾಸವನ್ನು
              ತಿಳಿದು ಹಣೆಯಲ್ಲಿ ಶಿವಲಿಂಗವಿರುವ ಬಸವನನ್ನು ಕಂಡು ಪ್ರೇರೇಪಿತರಾಗಿ ಅವರ
              ಕಾಲಘಟ್ಟದಲ್ಲಿಯೇ ಪ್ರತಿಷ್ಠಾಪಿಸಿದ್ದರು ಎಂಬುದು ಕೂಡ ಅಷ್ಟಮಂಗಲ ಚಿಂತನೆಯಲ್ಲಿ
              ತಿಳಿದು ಬಂದಿರುತ್ತದೆ. ಆನಂತರದ ವರ್ಷಗಳಲ್ಲಿ ಸಿಡುಬು ರೋಗ ಮಹಾಮಾರಿಯಿಂದ
              ಸಂಪೂರ್ಣ ಕುಕ್ಕೆ ಪಟ್ಟಣ ನಾಶ ಹೊಂದಿತು. ನಂತರ ಬ್ರಿಟಿಷ್ ಆಳ್ವಿಕೆಯಲ್ಲಿ
              ಹಾಗೆಯೇ ಮುಂದುವರೆಯಿತು. ಇತ್ತೀಚಿನ ಕಾಲಘಟ್ಟದಲ್ಲಿ ಶಿವಲಿಂಗವಿರುವ ಶ್ರೀ
              ಬಸವೇಶ್ವರ ದೇವರನ್ನು ಕಾಡಿನ ಮದ್ಯದಲ್ಲಿ ಇದ್ದುದನ್ನು ಕಂಡ ಈ ಪ್ರದೇಶದ ಹಿರಿಯ
              ಭಕ್ತ ಜನರು ಒಂದು ಮರದ ಬುಡದಲ್ಲಿ ಕೂರಿಸಿ ಭಕ್ತಿಯ ಆರಾಧನೆ ಮಾಡುತ್ತಿದ್ದು ಈಗಲೂ
              ಹಿರಿಯರು ನೆನಪಿಸುತ್ತಾರೆ ಕಾಲಕ್ರಮೇಣ ಉತ್ತಮ ದೈವಜ್ಞ ಮುಖೇನ ಅಷ್ಟಮಂಗಲ
              ಪ್ರಶ್ನೆಚಿಂತನೆ ನಡೆಸಿ ಸಂಪೂರ್ಣ ಜೀರ್ಣೋದ್ಧಾರ ಮಾಡಿ ಪುನಃ
              ಪ್ರತಿಷ್ಠಾಪಿಸಲಾಯಿತು. ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವರ ದರ್ಶನ ಪಡೆದು ನಂತರ ಶ್ರೀ
              ಬಸವೇಶ್ವರ (ನಂದೀಶ್ವರ)ದೇವರ ದರ್ಶನ ಪಡೆದು ಪ್ರಾರ್ಥನೆ ಸಲ್ಲಿಸಿದಲ್ಲಿ ಪೂರ್ಣ
              ಫಲ ಲಭಿಸುವುದು.ಭಕ್ತರ ಇಷ್ಟಾರ್ಥಗಳನ್ನು ಅನುಗ್ರಹಿಸಲೆಂದೇ ಬಸವನ ಮೂಲದಲ್ಲಿ
              ಶ್ರೀ ಬಸವೇಶ್ವರ ದೇವರು ನೆಲೆಸಿದ್ದಾರೆ ಎಂಬುದು ಸಾವಿರಾರು ಭಕ್ತರ
              ನಂಬಿಕೆಯಾಗಿದೆ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
