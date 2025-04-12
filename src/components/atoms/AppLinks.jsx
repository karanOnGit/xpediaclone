import React from 'react'

export const AppLinks = () => {
    const storeLinks = [
        'https://s3-alpha-sig.figma.com/img/6e8f/7104/16a64cd0a17e4e22c12475277042bcba?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hrjDmQxDHwY7EcvzSeyRqhcRPvwg2UU2f-T789puRLM1mJBRBvsNJORU9Q42wVIPzuexBEfnt~tzBYHS5f~JUkoZhPrEAdiOaIp5QohJbXWkL6Wz8OBsK2FBWAz9t~GiC-bj7oqoqIjH97NQwu3Zenkmk4e~TK3iwZhoXsjs1keyZOBYkkXwyntwFwzg-WxICpNGVI8mTJjkzRqfFCP-ajXgilPk1FqX8uI5ugdUG5iJDWXZaIzLxvpmpmW0iAkys6LuQDTBniO6lIu7tL~F2lpCi68w89XJjMOAlWB732wg2bM8FpcUAG58euqJyRBdifo3qbbtxqfDucdb1Gw6Lw__',
        'https://s3-alpha-sig.figma.com/img/ee33/6951/2232d28f62823701582b57b98e1860eb?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QiFr1AtgrVf5UfcuRS2Kf7ofwE-7hHGlhtZ0TmBsq1Du-LICNU7jjOdgC-7wIL4ebWgL4cHeEGLtF91tflH-8v9pW6BLUkVYzhVxnGSiQxK2ylyikPE~xgn-HhPwnxilAcB4rlnQHhLImtNWXjSWuGFk5FjBWU3jtM8OC0UNjwVNeC-7f-gWhDE8vOBgRTAUnT~AxB5pDcWPPiWVQS1LpKKiDTmISUIvdqcxFD78cKZRgQSnBLqxnJ8rTPTNz~A0j-VnoIobV5fFSyYku092wsD5T0y92q21m~Y~lIiLBQuE~xG7hugkLwgnrMMAnp9ilhAfbc-AG~~rtRXiNGEiXQ__',
    ]

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                gap: '39px'
            }}
        >
            <p
                style={{
                    fontWeight: '600',
                    fontSize: '24px',
                }}
            >
                Socioglamm App is Available on :
            </p>
            {
                storeLinks.map((stores, index) => (
                    <a href={stores} target='_blank'>
                        <img src={stores} alt="notF" key={index} width='133.62px' height='43.68999481201172' />
                    </a>
                ))
            }
        </div>
    )
}
