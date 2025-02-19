'use client'

import { useEffect, useMemo, useRef, useState } from "react";

const langs = {
    en: {
        "please_wait": "Please wait, your data is being processed",
        "powered_by_nafuntech": "Powered by Nafuntech"
    },
    fa: {
        "please_wait": "لطفا منتظر بمانید داده های شما در حال پردازش است",
        "powered_by_nafuntech": "قدرت گرفته از Nafuntech"
    },
    ar: {
        "please_wait": "يرجى الانتظار، يتم معالجة بياناتك",
        "powered_by_nafuntech": "مدعوم من Nafuntech"
    },
    tr: {
        "please_wait": "Lütfen bekleyin, verileriniz işleniyor",
        "powered_by_nafuntech": "Nafuntech tarafından desteklenmektedir"
    },
}

export default function SplashScreen() {
    const isLoaded = useRef(false)
    const [animationRef,setAnimationRef] = useState(0)

        const lang = 'fa'

    const handleLoad = () => {
        isLoaded.current = true
    };
    
    useEffect(() => {
        // Check if the page has already loaded
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("load", handleLoad);
        };
    }, []);
    
    const getSplashScreen=useMemo(()=>{
        return <div dir={'ltr'} className='fixed top-0 left-0 w-full h-screen z-[10000] flex flex-col gap-8 items-center justify-center bg-[#fdfdfd] '>
        <div className={'flex flex-row items-center gap-4 mb-12'}>
            <div className={'relative w-[180px] h-[230px] '}>
                {/* <Image src={ChooseLang} alt={'loading'} fill className={''} /> */}
            </div>
            <div className="flex flex-col gap-4 text-white w-[130px] text-2xl font-medium">
                <span 
                    onAnimationEnd={()=>setAnimationRef(prev=>prev+1)} 
                    className={`bg-orange-500 rounded-2xl w-[97px] me-auto  rounded-bl-sm px-4 py-2 select-none ${animationRef%2===0&&'splash'}`}
                    >Vocab</span>
                <span 
                  onAnimationEnd={()=>setAnimationRef(prev=>prev+1)} 
                    className={`bg-orange-500 rounded-2xl w-[97px] ms-auto rounded-tl-sm px-4 py-2 select-none ${animationRef%2===1&&'splash'}`}
                    >Learn</span>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full flex items-center flex-col gap-4">
            {/* <SpinnerLoading width={50} height={50} color="var(--theme-color)" /> */}
            <span className="text-sm font-medium text-center my-8 text-slate-600">{langs[lang]['please_wait']}</span>
            <span dir="rtl" className="text-[10px] font-medium text-center text-slate-500 pb-2">{langs[lang]['powered_by_nafuntech']}</span>
        </div>
    </div>
    },[lang,animationRef])
    
    if (!isLoaded.current) return getSplashScreen
    return null
}
