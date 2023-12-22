import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row justify-center px-10 mt-20 absolute bottom-0 w-full">
      <div className="p-2 flex flex-col gap-4 items-center justify-center">
        <p className="text-xl font-bold text-orange-500 ">ISCODERZ</p>
        <div class="social-icons flex flex-row gap-4">
        <div class="icon-container">
        <a href="" target="_blank" class="icon-link">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAACUCAMAAAA6cTwCAAAAtFBMVEUAAADVJCPCGR7bJyTGGx/KHSDgKibQISHjLCb////tLyj22NjcRUNwDhHTQULxLyllERDPGBgUAwOeExinFBmZHhqVEhctCAeTHRnYHhzp5+eBGRafHxs7CwoeBgW3JB9JDgzWAADKAABTEA5eEg+KGxerIh14FxQnCAbZFxPBJSHdTEvwwMDgeXnfb2748/PitLTgnZ3l09LdhYTOLi7jvb3r8/P66OjUUVHuycnSV1c0BggTos4HAAADLUlEQVR4nO3ba2+iQBiGYU7DaFu3WEVBVPAAKtZaq9Ye/v//2qFS3bQbwO6YVzbP9alNmITbAUQOigIAAAAAAAAAAAAAAAAAAAAAABLd7fXbvWA0tmoTzwtDx3Fsu5uybfFv6HnexLLGo6DX7qdDqNf8u9544kS+xlXz6jZ1leOwnKlzw4/sybhHXXEU2HG6mpWf2Y817IC6JDXhPy35GsY96pYPoZycPYe6RgglTdDerU3do4zMiinTLfnxIbqSGmRWfOoiyUGmqQe0QaH0okqDtkiTuxclRXGfMqityg4yTTaiLLLOUKTXKItCU5euElIWNc5R1KUsis5RFFEeGvwzFJl+my5oml80mJ1cFBOeCL3HOUXu/H7hntpkEBYFcc7KuTfX1e2DeloTD+iKRkaBoury/mEwU4sXqYRFY1akSDQ9zgdu4SKT8KTB4sWKqtXO482saFOFskjV1UyHoupzZzV33eylU7RFOY5F1eXz02o+yPkE9kVjuqLaCUWiqfO0cgs0VayyFImkztNafD39P0XiAJE0bWb1zEFmmYqSaepsF5tZaYvqv74UpU1rfrFFPNtfipKk5+0mY2TpiqrL7cswa2DZipbXi2E9c5BerqLr9WaYM4i0KGfdvhXtFpt69gSVq2i3rudscOUq2q143vZGX2RxzjIdi3arX8N69sKfdMIzVYsVLFquXuoFexhTCX9NjLViRY/J8aBo0OUXLe/F8bpwjkB65STOLXp9fSu6/xwQFgV+3oe/eePDE3uYRni9rpdbxE6dH4Hymuq0edIOUpD/Tld0F52hiEeEV/KVhvwgxruUd1tazJCOO5QPp3nnKCJ93MmSH2Qw0jvLPU1+UEx691/x5Rc1p6RFIZde1CINUvqq7CKNdqNTlIgZmkysSRykjAy5RZQ/jlIhkxnE6Z/qVBRH4iwZ9kU8zD7xJe1LLA5Jn607GoVNg7F/mipx1GZai34fOngPamGj6YsT5z9/XmR+7XyeaQss9pvd0AouZIKOjm+BJK+BJO+BOE6r1WoIzZT4s5X4eBuk9vE2yPRS3wUBAAAAAAAAAAAAAAAAAAAAACit31DAjAwOzLISAAAAAElFTkSuQmCC" alt="" width="45" height="30" />
       </a>
       </div>
        <div class="icon-container">
        <a href="https://www.facebook.com/profile.php?id=100090518155741" target="_blank" class="icon-link">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAACUCAMAAAAppnz2AAAAYFBMVEUAAAD////8/PxkZGSEhIRcXFzl5eVFRUUEBATOzs74+PidnZ1ZWVlpaWlVVVW/v78kJCTf39+QkJA9PT24uLisrKyjo6Pv7+8qKioxMTEfHx8SEhKWlpZ7e3vZ2dlLS0vTY7aJAAACzklEQVR4nO2bC2+zIBSGhTnFS9sVtVat9f//yw+vQefnbcsA8z5Jt6WThWcHKIdwLAsAAAAAAAAAAAAAAAAAAAAAAMDpYfWLtd/3NNv5vCL2ix1oAH6Vpxt+7OPqfqnu9AZcO3boXu5JGanu+BJiHci4R8kRfK/M6+mm44RjQiyK/UNehFCSJlnzN7Qku9VD65gZJTTJVQv8j+LW/vePqpFAz4gxy96nMvNzqOU8s4od0aJNlPwB2r55V+0wD98TMf/uxY8Xf3HOX+JL0umGqiVmee/w8l7VqK3bRTJW1PdFonSzWBpkbZthVoXdb7QcjpeNCz4lTllMG4fdaEx13IqUWz/K0tL6trnvY+ZflfR9GZuSTWo0mUl0wi6c9FNR75ewNy76XjMUZTE2jEZqrJnoOyllrT4H70ejsWaCdBIv1ryMNxOPxLOHHpXhZvXqeRknYRV/1MSGmwn8bNSIO36bVRtuRptp1iNGZTlNVE01I5PtU+G1y+UpzDy5SeQQMv54N85smEayGbNcpzklMNhM6v3UbPqkYWaix/0SODa79weOvqFmlKT2pWWUNOef3bsf3FAzsdgP2cn8Ec7VWLO1vMvcfSPMYPan7DaT15IzmE3TzhbTzcY550li5i43jgw1o8SPg4aHLTd5voKOE+TUb7mJ++3A3GCzUX52hr0+zGD2p8BMAmaKgZkEzBQDMwmYKQZmEjBTDMwkYKaYM5ttUTPT7BdipuUtwAvdcqF9xUzLm5tu+mMzShxVvV9k0w3pFTMtb0hbfP1OKl0z03EBsax8y0RbMtO2EsGy18zo2mjUsxChr/hZiVnxNZBfJ2aBpvVndZXWailTepPwRpcA9a3SEmpNZd2RCrT65mNTWadaYg5WF/w9+fsH1ZBM05pB1syS6ngFK9O3GrLt1rM6WnV8pMYcAAAAAAAAAAAAAAAAAAAAAAAAAOAQ/wA3DSiGImaw+wAAAABJRU5ErkJggg==" alt="" width="45" height="30" />
        </a>
        </div>
          <div class="icon-container">
          <a href="https://www.instagram.com/shreebasaveshwaratemple?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==" target="_blank" class="icon-link">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUCA//EAEsQAAEDAwEDBAwHDgcBAAAAAAEAAgMEBREGEiExQVFhcQcTIjKBkZOhsbLB0SM1RFRydNIUFRZCQ1JTYmRzgpKioyUmNEVjg/AX/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EADQRAAICAQEGAggGAgMAAAAAAAABAgMEEQUSITFBURNxFBUiMlJhgbEjMzRCkaHB0STh8P/aAAwDAQACEQMRAD8Ao1AEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBnCAYQDCAYKAYKAYKAYQGEAQBAEAQBAEAQBAZQG9bLVU3J5FOwBg76R25oXWqmdj0ijpCuU+RJ6TSlHEAah8k7+bOy33qfDBgveepMjiRXvcToMsttaMCiiPWMrusepftOqorXQ9i128fIabyQWfAq+FGfBr7GRbLf8xpvIt9yeDV8KHgw7GfvXQfMabyLfcnhVfCjPgQ7D712/wCY03kmp4VXwoeBDseDaLceNDT+BgCx4NXwmPAh2NefT1smH+n2DzxkhaSxan0NJY1b6HEuOlJYwX0MhlAGe1v3O8HOolmFKPGHEj2YrXGPEjj2lji1zS0jcQRvChtNcGRDysAIAgCAIAgCA37Pb33KsbA04aBtPdzNXWmp2T3UdK4b8tCwaeCKlgbFCwMjYMAD0q6hGMFouRaRioLRHCuWqYYHmOjj7cRu2ycN8HOoduaovSC1I1mUlwijkP1Tcnd6YWdUfvUZ5lr6nB5Vh8zqW6fp2+TC19Kt7mPSbO5g6lup+UD+QLHpNvcek29x+El0+cf0BPSbe5n0m3uZ/CW6fOB/IE9Jt7j0q3uehqe6D8sw9cYWfSbe5n0q3ubVNq6qY4fdMMcjf1RslbxzJrmbxzJ/uWpJrZc6a5Ql9O7um98x3FqnVXxsXAnVWxtXsnL1RZ21MDqyBoE8bcvAHftHHwhcMqlSW/HmR8rH1W/EhR4qtK0wgCAIAgCAICbaNpRHbnzkDbmfu+iN3pyrTCiowcn1LDEh7O93POsa51PTspInYdNkv+jzeFa5lrSUUMueiUUQwlVpXmEAQBAEAQGzb6R1bWQ0zCA6R2M8yzFbz0N64OyaiupNvwWtYh2DHIXYx2zthz144KcsevTTqXXq6rd06kVJmsV6LWvyYXYPM9p3+cFRNXVPh0KlqWPa12LBY5ssbXtwWvAI6irVSTReJKUdV1K2vFKKO5VEAHctednqO8KpsjuzaKC6G5Y4mktDmEAQBAEBkICyNPxhtlowBxjB8atKnpWkXONHStEU1m4m9Fv5kbR7faoWQ9bCBmfms4K4EUyBlASKxaWqLgxs9U4wU53t3d08dHMOlZS1J+NgTt9qXBEspNO2ulA2aRjzyul7snxrdbqLavAoh01NiW00Ejdl9HAR+7C21idniUvnFHGuWj6SZrnUJNPJxDSS5p8e8LRxXQh3bLhJfhvQifa6uxXNj5otmWJ20AeDh0HmWqbiyo3bMa1by4olo1VazB2zalD8Z7VsHOebPBSlei39ZUbuvXsQu41bq6umqXjBkdnGeHIPQo05bzbKS2x2Tcn1J9p93bLLRu5e148W5T6Zewj0GJ7WPFkU1k0NvJI/Giaf/eJRcj3yo2hHduOCuBCCAIAgCAyOKAtGxtxZ6H9wz0BTYy0ii/x1+FHyIRrH4/n6m+gKLN6yKrM/OZxRxWhFJLoyyNuNW6pqGbVNAR3JG57ubwcVq5JFhgYvjT3pckT6sngoaZ9RVSCOJg3k+YD3LRT14Iv7JwqjvSeiRBrnrSrme5tvY2CLkc4bTz7AuiKS7alknpXwRow6rvEbw41LZBytfG3HmAWThHaGTF+9/RKrBqWC6vFNO0Q1X4oB7l/V09CxroXGHtCN73J8Jf0b1+tEd1onQkASt3xPx3p9xWd7UlZmJHIra69CrpmPikdHIC17SWuB5Ch5FpxejPA4oYLF0vvsVL1H0lTKX7B6fZ61xokb1wMXaP6u31nLjf75VbUWl68v9kdXErQgCAIAgMjigLYsbM2ag+rR+qFu56I9HjL8KPkQLWgxqGpHMG+qFprqU+d+fI4aEQtzSVF9y6fo24w6RnbHdbt/owPAoNtntHqtn1KGPH58SJ9kO4GW4soGH4OBoc4c7yM+YY8a70L2d4qtq3uVvhrkiHruVQQHuKR0Tw9hLXNILSOQhDKbT1RbVnrfvjaqar/GkZ3WPzhuPnC48noezxLvGpjN8yBa4pRTX172jDZ2CTw8D6POusXqjzm1K1DJbXXicALJXFjaUH+AU38XpK71y4Hq9mLXFj9fuRzXXxtF9Xb6zlpbxkVO11pevL/ZG1zKoIAgCAIDI4oC4LAz/Bbf9Wj9UKPZPQ9Pir8GPkV7rkY1JVDoZ6oXSp6xTKTP/USOAuhDLtsT2zWShkZ3roGY8SprXpZJHsMSSdMH8itNeQvi1NVFw3SNY9vVsgewqyxnrUjzu0YtZMtfl9iOruQQgM8UBaWjonxaapA8b3Bzx1FxIUecvaPWbMi1jR16kW7Ib2m7QMbxbCCfCSutfIqdsSTvWnYioW5UllaSGdP0v8XpK2iz12y/0sfr9yNa8+N4vq7fWck3xKjbP6heX+WRpalQEAQBAEBlu4oC59OszYrcf2WP1Qqu+ekmeqxFrTDyRXOvm7Op6odDPVCm4z1qTKLaH6iRHV3IRaHY3ubaq1Ot7j8LSkloPKxxJ9OR4lV50N2W+uTPQ7Kv3q3W+n2PvrfTr7xSMqKQA1cAOG/pG83XzLXEyFB7suR02jiO6O9Dmv7KrlifC9zJWuY9pw5rhgg9StuZ5tpp6M8BDB29N2CovFUAAW0zT8LLjcBzDpXOyxQRMw8SeRPRe71ZaexHTwhrQ2OONuOYNACiJts9YlGuPZIqK/1/3zu1RVjOy92GA8jQMDzBTorRaHj8q7xrpT7nPHFZI5Zekh/l6l/i9Yoj12y+GLH6/cjGvfjeL6u31nLL5lRtn9QvJf5I0sFQEAQBAEBlvFAXbpUbWnba79nYPEF5/LnpZJHq8P8AIh5FcdkZuzqmo6WRn+kK1wXrQij2kv8AkP6EYUsgG7abjUWuvjrKV2JIzwPBw5QegrSyEZx3ZHSm2VU1OPNFvWC/0V9pw+meGztHwkDu+b1c46QqS6idL48j1GLmV3x4Pj2Ppc7JbrnvrqOOVw3bfBw8I3rNd84L2Wb24tNr9uJzYtHWKGQObQhxHDbkc4eIldvSrXw1OUdm4yeu7qdcMjp4dljWRRMHIA1rQik5P5kxKMI9kiv9YapZVsfb7a/MB3Syjdt9A6OnlU+mrd4vmUO0NoKxeHXyIYpBTgcUBZ+lW7OnqLpaT/UVjqev2av+LAievDm9MHNA0ecrJTbYeuR9ERtCpCAIAgCAy3cUBc2gJxVaVpCMZi2oyM8MH3ELzu0Fu3v5np9nT3sdfIiPZWonRXWlrB3k0Oxn9Zp9xCn7LsUqnHsys2rBq1S7ogysyrCA+kM0kL2yRPcx7TlrmnBHhR6NaMym09USOh11eqVobLJHUtH6Zm/HWMedRZYdUuKWhOr2lkQ4a6+ZtTdkO5vZiKmpmHnwT7VhYVa7nV7Wva5I4Fzvtyuu6uqXyMzkRjDWjwBd4Vxh7qId2Vbd771OcV0I5hAZaCSABklAW5bKY0drpad3fRxNBxz43rnrxPa4tbrohF9ivtYzCa/VIaciPDM9QXQ8ztOe/ky06cDhoQAgCAIAgCAnvYsvDaermtc7gGVB24ifzxuI8I9CqtqUOUFYunPyLTZl6hN1vr9yeakscN+tb6OV2w8HbikxnYfyH2FU2LlPHs3ly6ltlURvr3XzKXvFmr7PUmGvp3RnPcvx3D+kHlXqab67o70HqeatpnVLSaOfg8y6nIYKAYPMgGDzIBhAMFAACSABklATLSWmJnTR19xj7XHGdqONw7p55CRyALlKa5Iudn7PlKSssWi+5LbpWx2+hlqpiMMBwOGXcg8axEvci+NNbsZUc8r5ppJZDl73Fzj0krseLnJyk5Pmz5oahAEAQBAEB7ikfG9r43Fr2kFrgcEHkKPitGZT0eqLX0jrqmr4mUl4kZBVtGBK44ZL4eQrzuZsyUG508V26ovMTaEZLcs4MmckUVRHsSxsljdxa8BzT41UxlKD4PRlm1Ga0a1Rxp9JaflOXWqmH0AW+gqZDPyF+84PCx3+01X6K08f9vaOp7veu8doZHxGvq/H+E+TtFaf+Y/3He9dVn39x6uxvhPB0ZYB8h/uO966LNu7mfVuN8P3PB0dYR8hHlHe9dVl29zPq3G+H+2YGlLG3hb2Hrc73rosix9TZbOxvhNmmtVvojtUtFBG7nawZ8a2Vkpc2SK8amt6xikebncKS3RGasnYwY3DOS7qHErrCLfIzdkVUx1mytNSX6W8VAwDHTMPwcftPSpUY6I8xmZssmXZLkjirYhBAEAQBAEAQBAZygOpbNQ3a2BraK4TRsH5Mu2m/wAp3LjZjU2+/FM7V5FtfuyO3H2Rb8wYc6lk+lD7ioj2VjdNf5JS2neux9P/AKTeeWnoD/1v+0nquj5/++hv61v+X8f9mD2R7wfk9B5N/wBpZWzKV1Zn1rf8v4MHsi3c/J6Dyb/tLdbPqXVj1tf8jyeyFdj+QofJv+0tlhV/Met7+y/g+b9fXd3BlI3qiPtctli1oPa2R8v4NOp1feagY+6xEP8AiYGnxroqYLocZ7RyZ8N7TyOHNPLPIZJpXyPPFz3Ek+EroloQ5SlJ6yep81k1CAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA//2Q==" alt="" width="30" height="20" />
           </a>
          </div>
          <div class="icon-container">
          <a href="https://www.google.com/maps/place/Shree+Basaveshwara+Temple/@12.6904403,75.6071434,15z/data=!4m6!3m5!1s0x3ba4e6a6152c4c59:0x848a6ae907e47652!8m2!3d12.6904403!4d75.6071434!16s%2Fg%2F11c2pt0m2_?entry=ttu" target="_blank" class="icon-link">
            <img src="data:image/png;base64,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" alt="" width="30" height="20" />
           </a>
          </div>
        </div>
        
         <p>&copy; All rights reserved @ Iscoderz</p>
         
         <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
        <div className="flex gap-4 mt-2">
          
          
        </div>
      </div>
    </div>
  );
};


export default Footer;
