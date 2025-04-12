import React from 'react'
import styles from './SideRightPanel.module.css'
import socialicons from '../../assets/socialicons.png'
import { CompanyLink } from '../atoms/CompanyLink'
import { InfluenceList } from '../atoms/InfluenceList'

const SideRightPanel = () => {
    const influencers = [
        {
            name: 'Rupesh Sharma',
            image: 'https://s3-alpha-sig.figma.com/img/fd52/3638/9a8d9bfd1adc6c08cd35846ba602ad5d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WTF4mTySYn5bfCSQ1PqO93zm4cKYs~cZUSn6JkVvk5APW2ZYWGLHXp3oWjdluw~zXTVAPDNgFdEsaknk6VNR5vJK22FY2XyOEwGRv7nnLhzbGU6BZm6UOK5yyYpPA2~OEiXIavNYPFSKZhSLotbbQxs3K6L-DewDHk54pT7wBcSYdQzOoZTzW136diXOOVgHm2ia1P8HT6TohMv8a9U9LOWietNIm9K3cNRaUZXJ8MNpF85UrWWWQHZALyaL1phSMA8FocDDIaMKu5Sjulm5kRib0QpM84zdIPMetCbGAZlGoFuun837AYpLKEDKH-bCXgEQoHmWvtd-OUDubf8QSg__'
        },
        {
            name: 'Atual Ahlawat',
            image: 'https://s3-alpha-sig.figma.com/img/913a/3d49/611d48bbbf13d0ff22d54ab300d702a3?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dg5tLBknMGI1SNvv4R3u5zJogu7sdH7dMePr~G4iwVck1hozkD5uYqoluoU~HpQi6CZI-ArtA-Kvq3pZUaasg94yqmgEMIpeEvUA3lJz63LuYiJEguKg9Jh-MfhkLnP5Q0XoRAQmBnqmv3yC94p3lCq6nmnG5ca0CAYR~CTH5Q9PiqalQKEG2BJWkkmKq6AX84jyOhi-Fgva5vq8soaJh-s78PzjLf1gI~WYmLScH9OU3HZphrKtsxM3r53FR3QDKrehwIDB5m3sdFy7iTka5~W0~kleHiGVa7drrkj1vg0roOnrA9So0z9~mgEVJ4hMqyQBebdCtX5tN1eu0Fi9PA__'
        },
        {
            name: 'Kritika Sharma',
            image: 'https://s3-alpha-sig.figma.com/img/a518/c984/5dad5f3ad26d404aac2c5db462ada6a9?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EH4CHpSYf5yd9Sqqw6CPPVo2txv0YfCOL~kr~Me~xEXwldX41~rIZcmFt-VH0~9~dWiokQmzLs2LpNRVOY5HFqO3U~CrZuZefqGaqtz740V2gNZF6tCTl8jz3lTkFI5KH-sTfLjgQI-rM90YyoaVcm1CsQh2X-hgPDjL1Ru7g2IwADSq3DH1q2M-r3tSaY5mvDc3aB1tNM7bmF9PYudE~OCkLnyDlT9XKoqpp3zwms~u1MqVko4qqBsk-HBlweVwC2uLKYcarflkoByFnPu0-YiHYmriccyg9tAkmNAPY44ytrClzpWMQfqA9zTA1h7YbKCkn7~cO1tp6I037yPU3w__'
        },
        {
            name: 'Mohit Bhatnagar',
            image: 'https://s3-alpha-sig.figma.com/img/9598/943f/d0baeeb768e97d551421bea9b1f8e21b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GUSsAc8fR2tOsq~h7b31cdJhTCrzGwBfVGQ27c5cV45eVU04bz4G3yZiUILihur9KS4QsSWtTOmQgMEWbmNZ3A6XzsJ0Ac4REE04tHlXUwG6Xl843MfRwdKfJpMc3JpQDxfnLo9iz4YPzM2kYbxMTAWQ-xzfcMgrHmDyrtcADrs~3LGHWIOpvgrUJd7XaiEHQYaNn6Aj7YiBjxYWrybd~T32CJeFEyV4C4J9YlWIpdr70KxE6l4zod1KxXr5RHYqZ4RBZjTSLYj60T5BoYz-t0NPfFlToYM--FI0xZdOzl02Uld7vB6SOGn22nO5rxvfYS7fcECxhfOCheyTFbFmtA__'
        }
    ];


    const companiesWithLogos = [
        {
            name: 'Sharp Indonesia',
            logo: 'https://s3-alpha-sig.figma.com/img/e51f/94f9/7b983235cefd98b0dee07b2f3e13192f?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BIQpshJAP5Jc3FGUkCLPc1TUGodXFaMMqSJrMfbllO4W7ZYj~zGQegBcbklQrkQ5tjlvx6J2L~KuzVkjafOWBoO3xGJ7tfVPQZASZ03rK8yLUmIgVcI-3m3S7OZWfmpA7ZP0tE9rI5U0Jj8OH7T76uN8It9WvmTkADKLZLhDsvvr-ORJKF2hfTnKKsBAOnE5koJ5d1LAguTA~ZgurBVi33LIWxKMZIX4q98DM-1F4Jt3UR9Rl5xQFUCAVLbds787vukVaigvGVcSou-v5nAefg8w5-SPEJpBqCw9~TFb5xrMTxr~cqgzEHXFtVxWm5gllTZPRzegpaKmPwFl9OsOew__',
        },
        {
            name: 'Samsung',
            logo: 'https://s3-alpha-sig.figma.com/img/b22e/e01f/95ced97d3810841616f6b6508bd7d1f7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sTWyIc1fbO-0Fd0b3mKXynN53pRc0x3--92FqrYQdgXAAQNJDfEANrEzFRgn~~Dk68xoLNScAJjtPhPapvich1b6CpjOwaI3bALNeG3F6qWEPX2e6QRKYgYedZmMqVQstbItqqSLuhD8i7B07gx76HJSgDr6JTalV1-m4doJ2GVU2d3cwiWP4YgayKD2FuSwWlaKejQ9B6X3W8-UU1KKiVj-iSIBRUYv0XFaqotLPYnQXKv0EvQZF-nyLxIwmMoviAYlDSnVpax4YIp13VOnh1WSGevc-LshRvT8Iyq0ApaNFg-ZEsyZ3laepJEvuzOJcyNVLbOBWv9GqbLGBP643A__',
        },
        {
            name: 'Oppo',
            logo: 'https://s3-alpha-sig.figma.com/img/d531/ab5d/e946f3e315a698d3176dc1b75590ad4d?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rXwMHSSJOapSx0NAa8NUIjHmHOMvR3~j15zvzjg3TD474d2SOfFUyKepz107~HeZEXBfrtQ4Vm1qKVuWzYIkr7lcId7YdoxTF0E~2-GDVW5rJwQ5u5aUvG0jF6Jk0h9XCjQuDAJpVQjW4BqzmpIFdLRulYtThaHqcGGyUt0cIeRMw4f~xn9wb2YTM4~RsSPQIzX6A~IyorH5TwH3ns2M-jESPJ3OhuO740RP0DB0mV12QyeuMi2xpf~VnJHqHhKhy1PqcZguK2kKc0iyjgJ~XL5WqMAi0YrQ-HhIJ3EHIDG7LFzIcWBKGcI69bg8vr9TSApam0qshSNF8mbmA7~kbA__',
        },
        {
            name: 'Bank Indonesia',
            logo: 'https://s3-alpha-sig.figma.com/img/d9b3/ab10/d59c71c57e1dc2b5c1c85eb77a7a3d21?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KEV14BTcLd-UY9r4i7GcjJOMMGaGmgvFqGDKcoYsEFfKLPJi6yc176MeFfyzcZznCG5xYCE5-FIIIeIHLqQ0iUWdEGM1LAKUvQkBhRGJcxgvONR8WGsApZH0Osf1CeGjampelmFgQ64ZhyBiJOtENPGSR1hQgCIFNVGfzawvdtyWeDO2BPNfjhBVpANUZpqW-8XLpGMtAORPZdPm2Ux0O3VOANgXuFW0QlIszoUu3FgztsxbN1vRa6xjbSjXvwLh5iAv0c0Lp8n~-cShr~2jntwyaZRyCEF25zU3ojZWfFnHQUU9CZq4zfqB29T2X2UiaCEaNOE8zygZ71CvELrqag__',
        },
        {
            name: 'Meta',
            logo: 'https://s3-alpha-sig.figma.com/img/a174/1c40/b43fcb3bf387b44a61923ee9fb2f5056?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dOTwxvkcH0hjMqS~dcG78I81iGr-fufTmDGVKVnlwjsp8CHIkElVfE-tL-1emYJhedyxUpPkJ~g1DI3gO7tOztttNq4woeU2gSzlHrDu1TQekRfmFPhs9ltKAQiiYlhxJ3CwGn1-M4JA8y4Ofudqiz3S4dfCAxxi3FyFZBCM-0Eefsoak6ePW8N3PFOUdpROOL7-ROn82vMvI5-dUQYbR0PbyLrE3a~x314149OTi3AWaG4BY3WEN1rgusye4ZaG6lwf0dXqLlBWt9xplWgfzVkU9beQLwkANjd1rLuw3krrSixc0HH-HPBHdhxqjcGXKKAyHFuji8Zi13LO6fSebw__',
        }
    ];


    return (
        <div
            className={styles.container}
        >
            <p>Link Social Media</p>
            <div
                className={styles.appcontainer}
            >
                <img src={socialicons} alt="notFound" srcset="" />
            </div>
            <p>Top Influencer</p>
            <div
                className={styles.influenceBox}
            >
                <InfluenceList influcerList={influencers} />
                <button
                    className={styles.button}
                >
                    Show More
                </button>
            </div>
            <p>Our Partners</p>
            <CompanyLink companiesWithLogos={companiesWithLogos} />
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/78d6/4f42/40165c36e7c45576eff50e06695ad8e7?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A14wRopHworjho6mtxobasrG1I6QYbKIiLV8~9pge0a42cocsZVz~v-cBCBepJ46Lj7br7xgu5FWykEqT1XTWqwhthV78Mx5xHN5jQg37xt9GawLVBwthIpNcwBDxdvojOuunMtVkq7juol01xjy-O~1iAal7ucztAb~65svnI4a8tdfEdPDITVhsX6PILteqb09We0xHD1WKFsSjfvNGVkgZpngk1x6sfQbeuwm70Jp7YS-iZfBhYK8hfJ2RYWOJ1JjM~Pm45v2LQlJHV3qh6ISJlN1jctadzIsEMUxS0CQNSZGGXCwspPIqG63wcL8HTtTpxE-GMLAPVTlpt5swg__" alt="notFound" />
            </div>

        </div>
    )
}

export default SideRightPanel