import React from 'react'
import styles from './MainPanel.module.css'
import { Card } from '../atoms/Cards'

const MainPanel = () => {
    const posts = [
        'https://s3-alpha-sig.figma.com/img/5c8f/abed/b496f9d263e6948b9803c134f77f7d01?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZRvQTaCRIm0uPvCLSkgeQl-hfkj9O6CrLBogfaulbnP698Et79CWXxBysUrl5Pd89gmBWjktNBiq-8jCDFjkThRHgtpO1MB9jAfghBMbneCmOCDvcdpbY7sgXN5mcyP9ilXxNVi6s9nuAQ9KRku2b0jxdMDzCTbFBt9oVDYxsDwNgKnWcH-ngSiDyPkqMq5LfBk22eHr0MvkGYaOKO2Ae7c2FWDwhAAShe1QisyI1pD1eIQmUHIbyLw0mZvdc4x-qlfRp-s3D~TzCf3BMk9P7keT~4QPm78okGQzv9Mok9ZfqvEMWYP1oBMC81TTdmBK7x~A5RQkMk6zJUZdMbpcqQ__',
        'https://s3-alpha-sig.figma.com/img/02b5/357c/f02e0988d6443dc3c847b4021af7ca73?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K5LukcTEVgay~mpGJptSSlVJWhukXWO4r3xAIbYHwY25sYhKvQRfmO~yrq2ZlMGJ2P1tNQntcoNQBgY3ItRVMzRqyfQN3FkzYGqFCRBUECuxWH5XdruW2XyaOMxC0rX0GUybzodj-ErM6QhB-9JkyzzPvyWC~T22bTRpAVQ494bqnn8E2LY6Qbc32ij~6SWC~m7BzGbqugZRTTLhZQZy8mzPgh30NiztUOx1UQz1~gisMt9Vc4XI564rOn0cP0nbKKBPy0Gyq0pUwv8M5p54CMTWI3VCF-sN-bixNa7VA939lYs1sFxAxKeBxI26qggUTNEgRUz8UFzFwswk-ovJHw__',
        'https://s3-alpha-sig.figma.com/img/adc1/ce4e/25305c33eeee5b3fa3b18f803731d21b?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DsVdgDMuKGoXUSxBLljrhiE8XJS6morNqhhe3gE195piGzZV3k2B7hMm94qWjBsbSobDLLyk5nVjEZ9uLq3RDLkKPm7OezU1ZPgbS8rFCqmMqTdchXPu-vmw4lf9K3kAvK00S3h8Gs2WyGpROEYjSTZgWUknBUVplXMsI0l0GHq8-vj1XWizdnA5V8a9gQ4FAco9yKuFCAwFtV4YTsNEju0PKOyIdmjoBHinA6D1kczPAFjaLIpeojzCrJpqUy5RrjPsy5WF6bquE9o-zoVvvPPwlP~dAIn-MRv~nObIBAvE-gmHbgusb3ANWewDkDFaScU1CdF51kVEaZAUYIDOwA__',
    ]

    return (
        <div
            className={styles.container}
        >
            <Card posts={posts} />
        </div>
    )
}

export default MainPanel