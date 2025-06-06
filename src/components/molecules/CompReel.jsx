import React from 'react'
import { CompanyLogos } from '../atoms/CompanyLogos'

export const CompReel = () => {
    const compLogo = [
        'https://s3-alpha-sig.figma.com/img/0f7a/cf52/3df77854cb076505881f00da666c7b5b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jdn~1rJL08njZB~w42TGUoezoQKiOTqwTrZkMPczjfl4AxouVcdspoDa0xCO-DVsItCJ9-pjSbcu6pBMpQV54JttnYDzQABcms3zVFJvVENyZcRgb3V6CuG3rG1E1XxBa8aegCQqM13E7Lf3E6ToNUHVuYG9tOScBlUH52-qFSFZdEpMS108K4FYTKnRc0s~SzIh2AI1xhApL3DzVOjKSYexV8pbmBh4SCbBHMFwft4NOVwmOq41Z2J06ZZq-IYoZW0DhXlZofDj8w7jLICZoVZ3kgtLImU6UHqihyj6WeO5yVZI7DxAo7ArrjKQ7Bug7p6onopXXneTbwXNVAOMfw__',
        'https://s3-alpha-sig.figma.com/img/6e6b/7a15/e4eb22750c1d8c458631d176d7a9fc6c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YaBkz5Tr7cvKmGMdzruWP~XOvsHdIA67JuoyNyrxpa79HNIKbURVdwQXqIzEUTmnUINECuiKj80yc-NGbQ37JCqoQJ5sDEv8qiJrHPWV4c30vTDbgRp3u1vRRBDT9X6qmcErJ16NpGOi6kYuEar7k8GJLMfhbJbMlmLyWF1Pwo9IqP6NpyRvpg7UX48rprG~f9pl78nKavr2edRo5M0jkqOhkPXRotvFMK~p6ePwgx6tJRtFPwyJtWOnKN9Ou9DfQHfWmA4awmmdkpWsMK0LwCMsReofKEPvYs3aq3T7~a-iiZM6zOMNM3bO7yL7dHRlS6ceNNH54vmXrY4YQDnoSA__',
        'https://s3-alpha-sig.figma.com/img/fb4c/29c2/f3abbceaab17c44176989a48a142601f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Cm9AsUJJtwuSl4R6lVfZsJmAttTb7hZR5QnrDWWMTF1f9YoCUhz4HlFPFpJmmjg7CHTtdzBwvCFQ7dw0Ma5~obHVwUWhUUn2rQhxd2sKtNEeDGnR3Yuq9Hdr1dUHQ8cmoQOPPQzN7SaTihZvZHGU-K8O~wEsGmgKuY8r00JyiMqIMksamoPkmy0G9P6tMauIk~6GMRiJGee5SYxiEDYENxcr9cnzbvbJUXN3N8Wwf6KDnvWoulKHLyW9mXsY2Bmui9PKWYhWLpFcg-6ELLIVCvRRbAZBoO0aoItW2sToqJA9G2pqAp85sbVR9Tn4qjQx9eJXkrw8MKkfJBREdakFPw__',
        'https://s3-alpha-sig.figma.com/img/3201/71b8/1f554f635b95c7640d6e7345f40471ee?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ssyuwkFTY9aMq-jdWapjcPxt3XPcy020q899V6Xb2X~fFK7qnRbVEGqjUfkuzxmH5FiroZeNUO~t8HEu4GaKHh8U9BlX77GtOE0S5DRuGfs0ELRAhdbwN6B1BTDyd0h3yU-GfwciS-vat6EsqZ3d7C9eO1l7VG63X7whBReUt9cLyATR08rvhahwuAj~yoqWJkYEQZWnTZiSbiIdoOrjy6LF5EaU8Jf42vFfv~gmSzhUbveOh6fq4T008~M7fZ7uxJgkDNCWQSQStjcg9Me~YRpFzW2J2fcSd-FOOHux-XAA~2pLABoiZHwBnaa4Q5oc~BskQBAOErTNYPI~xbDsSw__',
        'https://s3-alpha-sig.figma.com/img/93d9/4141/247754b0ddd726e6a100839a3108d837?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UZMED1R8Z7r782SiIA7Xk5q7jx5OFKG3Y8tGkLgdnM3ibe~7jG7CVx4wee5Gr9CCzkvkgLXHVoDffeDF8hsvBP3fHkUR-9EsYj7CUUpNp-glJxh61fuMlrbAmuDhxTU5ixH8r9YJbrbsdrgLeYJ9Ep7zeDnh7ZfjjDcPQVynBr9pVv~LEge5U36s5VMtLrieAT0Ny172321fCfmAPc-ssYBn277ORG51FLdQddv7k6V8C7EjswZg~6DjS-I2DcJ72g6iwsw7dM3aaHQbtebY8wOa2P6bMj2VsmzpK01Mi4RcLCF7sT5sPwyKpS~FCn4YUsm0Z7969u3dVcGr9zpGcQ__',
        'https://s3-alpha-sig.figma.com/img/d799/a6a5/bc317aa09a7d921c92ffc416e58939a1?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qKJ5F4SbXESusjWkahopWB-40p9LoARH1hLiUYLGHtSgkQh3aorX5QhqgohmCWjMTapONGvboJPVX9FgjrGE7OmoVDvN741KOSGT-3N0Fw9inbVvfxPaV4HjULI1j0BY0PfwCjtfjyFK6PPbB17LaQWPDo~bkZ6q8e2gg0V-agX5dGPkT9t-rvA-g8sgAF66NudxgrtFxwcFr0Pobpzmyv1dNiCpTEZjEUcAsjIzyL7qYWW5F1Ayn~mXppvtCRuMI9hqLCQTRCaMhe6Enwl-8VlWQGeGjDlkgSu2hWHLG-f-QRLhnpT~KYgPabNdrqHCU4ng6yEI-Ok6W~J1Iovdbg__',
        'https://s3-alpha-sig.figma.com/img/8142/ae59/cc6fc6f3bde88a209adee875f6327fe0?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UHOZVzm74O5mQVM~gFWZwFHs37amWRYw5lJ3o6C81-78zUVUaKgik66RoXXwtv8kslG1L6MSgJvna0vFiW~XGATB65NR4cr7BDW3bnF3H-RBtQIMKKPnlbseM-~BRQ1e5po4bKlAUofN67JSphXKp~c1K9hLPYeLFfoWdW2Ceejgucgv~AbdFPCmhk-adiFpE1Tk88VVJtXNvq1dddQqTlTFcPEbL-vsC0deXUGmkX~vPP9InjoltDRtRMApW1-JUSn76m4k6uz-giPYAMK1PBwRFtnpMT7E0YQ3YOzwayFpB-C0xcbFHGAh1pf6M4cXJd8hFgn94uw9wJEF5IEMsw__',
        'https://s3-alpha-sig.figma.com/img/fc9e/65f5/5fdc4817dbe5a8667d109be2b66f7045?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ad5WYPDTMIdyFLMcRWWxp5NmVYq-ORKG0vqle2T~NPgx66mBm3LWG7pLiDdkHh7lEWqurnU4hOp48SbSeUUz0IJNOCSvijjJqcRkKPCgbWvp0qa385QABpNHwXKZdleRfgK7b~Ux3jtZHKQ0yf1O1FFbexZyO-Q1piGdvRrDrjpHooI0p~DDk6g~4x47PMFnIElSDKx9kaZojlhe8rrL0x4D0OOOCz9v6bYicSTEIvl3o8DK3PA3bvAzZk8D3CHfxxfquO5~XatXailxxt18eWHl4lj5-4YkXWMhpfnNz~M13OEzcyyDLZ7LU59CnDNpaCH7ZZugQAxmlflKpDgUmg__',
        'https://s3-alpha-sig.figma.com/img/73c1/e0d8/c65e5af8457096157317c95ab2cec51e?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RE97QmIS8jK5y5C0zyZ4axSkLBCobLSt7qdL7VgkmGxPmxMNMRCDiQmBKKwTcHyqX3GpX3~qHuTlsBIOKLazAl9qSrYj67p6fub5AY3Uu-GMXRzDOfsplTkprRtcSfOyaKh7wSDCu2464a6h4F0UptvuWC5ufnPYcUFGtfvwlfMCROVPQtu4HMHG4EZjC3jG-wBp74XgsTeQi-9ieMNjV-it4SynLA3NNjnVQUpFt-L5UbtKcnGijXuFKoY4VAmkspPCKxB9Vy0vXepcYqbmWVJ8lZTSreAlJ9GtodC5HFZn3C0LPIwWMHypVn8vpC5ZkBxDF9Ya7CKtEJIoJx4fvw__',
        'https://s3-alpha-sig.figma.com/img/8dc4/089b/aed85262478a67f71131ed6ad0a54e64?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=S6sIFZz7rInu8VDNCv4osrryA0PB7TFfG~TqkzyB0yzFAZGEcAmwEkay3HlKeAlw0b224oRESeKrFAPveDXmbd5DbF9irfz847IGcPlIS-zzg8Vphk8oNHwTZRSrqUqwmRbkRHNwu~VyCuEyaC2YBWDtv-FkBO0tyJoYESL6wxwIFM8Fj6vaD4cfVjv16~4TW1ktln~uEIyjAij7KVD~Z5AR0HUiVnVN72UAQg77dfMUKxCicjChWZvh38cFRj4T5BSPqBW30T5G5LG-XTSLABsKgCMW-d0~whlMbECdejjWXn0Kd0A-75mIB8p3c4rSwTyKXwqBADzyv5UdFRWLyQ__',
    ]

    return (
        <div
            style={{
                marginLeft: '389px',
            }}
        >
        <CompanyLogos compLogo={compLogo} />
        </div>
    )
}
