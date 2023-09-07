import React from 'react'
import './lunch.css'

const Lunch = () => {
  return (
    <div className='featured'>
        <div className='featuredItem'>
            <img src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/13/0/WISHBONE_Classic-Italian-Pasta-Salad_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371606907673.jpeg' 
              alt='' 
              className='featuredImg' />
            <div className='featuredTitles'>
                <h1>Italian Pasta Salad</h1>
                
            </div>
        </div>
        <div className="featuredItem">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYZGRgaHBwcGhwcGhwaIRwcGhwaGhgcHB4cIS4lHCEsHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjUsJSs0NDQ0NDY2NDQ0NDQ0NDQ0NDQ0NDQ0NDQ1NDQ0NDQ0NjQ0NjQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMEBBQMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIEBAQDBwMCBQUBAAABAhEAAwQSITEFQVFhBiJxgRMykUJSobHB0fAUYuFyggcVI6LxQ1NzkrIW/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAJhEAAgICAgICAgIDAAAAAAAAAAECEQMhEjEEQSJRE2EUMpHR8P/aAAwDAQACEQMRAD8Az9CKIuBvTZvdBWWjYP0WamghO9OKkUUAMpNBUinBpQZqACApQpINO27ZOvKk3QICIWMATUtOFOVzbULnFVtfYqRgsY7rOVgD1H41RLK/SNCxxrTt/oYtcO1gml4jAIB5W150MVw1kdXFw9Y5fSpL3gx2iBVbzSukzVHxouHJopHQjcUiK1fB/DrYlHd3yhTC7awJ/WqninBblkZmWU+8K1x2kzntNWn6KuKLNQJpLCmIM0dtMxAHOk09hrLO0LvvSYFza8MuQCWGtTk8KrGr60/hg7qoDZSu+tW+Hwz7s8ms7ySskoqjLW/DDszAPlA2NJxHhZ1Ehw3tV/dxjrmCjbeaewt97iZkAmj8sg4ezLHwxeiRBqNiOBXkElJ9K2Ae6rAs6gc1pFzFXQWLRl5RrTWVhxZgXssvzKR6ik1vy6MsuqMD6TVPicBh7hKp5H6bVKOVMOLMxNCpGJwjoxWJ9KjkdasTTI19gpNLoUwoRQpVJoAFChQoAaW11p5QBtRCl27ZYgKJJMAdzTEPYTDPccIilmOwFbPA/wDD52UG7cCHoomPc1pvCfAUw1sEgF2Es36Cr25eVfmIHrVsYr2VSm7pGCv/APDsx5b0+q/tVBxDwjibX2M46qf0NdJveIrKmM4PvUqxj0fVWBpuMQUpHHrHAcQ//psOpIipC4HJKtoR1rrV+5AJiubeIJe6XylQNPWs+eNR0zV4zUpU0U2OyQuYjU0jEcWdSEAGu0Us8HR4Z1Mctai/8oXMGVmhToDWNJfZ0I5OL4xiS8PxAOhY6FdDNR2vFnlTIjQVNv2EVCpMA7x170dmyiIMgG29Q4q7NEpN1FEzhWPdVyyQJkrW7sILuHKuJBU1iOF4S7dbyqAPvHYfvVx4g44mGtfBtsGuEQe3c1s8dS7fRz/McHSXZg7yBWZRyJH0NNk0znNE12rUrMTaQt3jem8FxApcQr1g+9Rr7k0ym4nTUVZx0VOdvR0vCqZkfajfrUy411G0OgqnwTZ8oBlQAd6trnEUVSjEkjaT+dclz4ypmuNNC77qwm4gJ7GnuFPbUSqle29VV3jFhREgM2m8/hTyYmyCCLiye8VKM0NpUTMVZzvBjL9DTF7CA+RHIHSmMX8RmzLlbpBg05hsRAl1zMvLSm9kl0LuYYBcumakYbCc4hhyI/Wjxa2748pZH3B2qywFt1QLcIJH2utNKyLlSIFzhZchxCkakbzRtw2xf8zKARoaexnCs/mV2HYGjw1xLYKsI7kzNSTcSP8AZFPiPC1twTafUcqzGOwL2mKupHfka6VhXtLqqwW9ppeItLcUqyAjuKtjP7K3o5QaE1ZeJOBPh2zoCUP/AG9jVGuI61oUeStEOaumSaFNC+KFHF/Q+UfsfIrQeC8KHxKk7J5vflWeZ61fgR8rs/oKlHsUujpt/EhELHkK5b4k8TPdcojEINPWtN414mEskA6tp9a5c94CpSZCMfsdLnmT9alYPjD2jKsfrVPcxVRHuE7GoIm2dd4D4yRwFcwetSuL8Oa55rDKZ3Bri6FwZmrLD+I7lv7Z+tOUVJUyWOfGXJG1t4LFoWU2cy8oYfrTN7gOKciECiZMsBpVNh/Gr/8AuH606/i9jvcP1qn+PH9mleVK7VGhPgxWk3b2QHcA/vTtnC4LDCAxuH+4zWHxfiiftk1RYrjTvooqyOKMfRVLPJu7N1xvxplBS1CDtUTwlw5cSz3bzeUbaxJrBLaYmWNdF8O4Jv6dEYZQzAkz9kmaWV8Y6K4y5S2aax4fwx1CgjtrTGP8MWH0RQrVZBXSFS35B8rBuVHcw+ueTP8AOVZFKS6bLGk3syuI8HLl0eG/Cs5ifD94HKACNgZ0rd43FIxyhzbYGPMN/rpUK9Y+IMpdWAO6iPxmprPJEXhiyr4XYu2bORx5p0jn2mrvEeHyRnBOcqJXkaq8HinW+iODkzeWdTI71vExiHYzWLNk+SX2SWNrszf/APGWzazKWFyJmdJ9KzJ4YzhC3lhwp+sFjW8xvF0QdBNVV4q6ttqJFUwlOL27BxTdeyPhMBbLmXZspgBWIBjnUbieMe1cVLaC4DusENB5SN6RgLd63dznVI9u5o+IG7du/wDRY7akco71qpXZCMmnTZbcMtI4koyt906wf1FW5tMNc+YfdiJrC8SwF4MGN1100ysQTU/w7bvsjNcus2UmC0SByPepXSLG290arFYoW4006U0l23fWCuo2nrVMrPmOdQ4GoIJ27imcFxzM72ksAERBzaT30oTclfoTlFd9lriMK+ZcqHTpVnhr32WImqH4WKZwwuKkaajQenWouJ4jds31W+4ZCPKwAG/X0pXWxqSlo0j8MBzkuWVxqragelcr43w42LzIdplfQ11TD4pVGbPKfWqfxHaw2JtMVdSygkEESCOVa8E6ZRkjZzOKFFmoVuM5PmtJ4WvqAVB80/hWVmlWcU1tw6bg6jqKoRrNT4/uwiHlNYPOTtV/xjjn9SqpkIgySaqxYobItDC2+tHkipAsmj+F1osOJCcVBu2Cat2QU01oUuVBxKgYQ0sYA1aLbinMnY/Sjmx8UVycN606LQG1SC9JgVOKfsrlJdIjla2Xh7jCPFu5oiAaa6xtPvyrIMaf4Tcy3QDs2nvuKjmVxZGLcXZ2nh90XbQKHKB+hqQykgAA+tUPh97iKvlCBySJ5jTfpWlt2iBude8x6HesEZW6NKurKPi+F0n4Ic+s/hVNgeHuwLAfCPQ6fhV3iFcuQt1wRuGGhjl5l/I03/SuSGbLA+ycwB9zvUW0XK0tlXjcLICuULgyCGy+471B/wCQ3My3FuXVhgSoaQQDqJHUVrMZYRgM1uZ2lVI/OjTDLaXyrE8pMD67UuhctUYDxUl69eb4AKiACh1BI59qbwQxiABvhtAiM0Gt+9u4dVRD/ug/WKr+IBE87WTm22nTrKzUu1TS/wACVJ6M6/iLEIMj4ckREAgn2EUrAeI7qIQ9hlBnkOunerTG39FKuiZxILDzR0BOlFhraXEKm4HbnLD8IpN0qoUYRvkyE/EcO5m4SrHQAnLr2nSpiIoRWzwoiYO8detVjYdVDW76hrQ1YHcdI61m+LeH8pLYN7kD7JJOvRT+9OOOE1TdFmSTWqtGqu8ZBLLaksxAAPl096ruFYj4dxnZ/O7ebNtHYjpWUwfiDEJ5WVXI5sNQfUVPs+IXgTZSRzn/ABV68eUY0ujFklGUrumdIfGpkBtkvPQzrzqFxHDLdVDcBlS0LtyPOsR/z+4PlRVHQGhieP4h1ykhe43qK8ed9EYySdhv4huC38BBkgkMZ1OsVX2id9RTSJqTzO9SUaN63wgorRXKTfYmhTN6/roJ60KnaFxZZ5aJxS6IrWY1jaaGn6bHShqKQCmNIY0ZakkUAIYUg05PWmL10cqai2KUlEsOCWg+ItppBcTO0DUz7Cuou6GfhlG5AQK514JwjPiFJBAyOyyCA0QD6jWtvh7IUM620JWc2pXKOokxVGeXGXFE8S5KytxnDnDBiVY7wbYI9JA0qdgruHYHPbRGG/lEH0MVIS7mQPmLI+oK6gT1MzFKukrCuvlP2ljbuDWfnIu4xevZCu8HsOTmtJB+VhrINZzH+Fvhur20zBTIg7diDvWwxGG8oNswO0a/WqjFuzZgZED5hKkHp0NTU5fZDiuybZtsVUpmGmg3jeT9RVPjb14ksr3FZDBgwI30A/WpPCOLfBMO0pB1bQ6xy5k1Cx/HLZLSrHNuV5/5rPwd6LVKnaWiRhsdibinMysDKzl1AIEsYME6ncUjGPeRctu8wY/7tuxEDp701wri1ldVLprzn2PaptzEpiGCWpYgakSsTp9oQZ6T16VJppbQnTnfogWPEGMSEZk33ZANPUfnVmniEK+ZzrHIZvwo+I8MkpmB5ZgBrpVZiOB5myr5CQSCTuQZjtyEVGPydPQZpQSXH2XGO4gXVSl/K265QB9RER2NS8Dx3yL8QqXmGgEKYMSCdj2NZHE4O+oJCtmMTGs6ideVS+EYuSUuIcmp1HmVuZkbipy5R6ZVFxfZqeJcGs4gh9m76gg8oP6VU2vDVi3cOSQ/NQSw157eWn7aI8FWzAaCPsj9KTeR0OZGhh+XfrTjKTG3RMxli0ts5xmy/e0k9yaZ4Ldwy/KoVm3UGfeoTcRZ1K3bbn/SJB+tZ+4qJcVkBmflMKdexNCaZYk6LTxjwC25+JZhbkElNg8a6f3ae9YAGus3ePYfIc5AKBWdd2WTCnSufeJnsPfz2DKuAzCIhuf71u8eUmuLMWaKTtFQlOEUAKfRRzFaqKBjQbzUd3LHKvuacxF7Mcqe5qTh8OAO9RlKuicIXthWcLAo6k0KpsvoBpSig3WjDUDCZOlBNNx60eY0kmkA89oGSmg70xcgDWg+KKqVEa1CZpqyMbK5TrSA9yaYdqW4imjVtUUtt9my8AcQLXPgNqMpNs/d+8D1Bn8K36WcnlRFZW3IYk950MD1rnPgFAHuObWcqFAdpCpM5pIG8R3P4johuq5E299A2YDXsDyrn565ujXhviSrOAVTIZhO4nSnriADePWN6gYq6FGUnLpoVzAn1iZ/mlIt8KQ+cScwBaSY/IflVSaWkidN7bGLuFctnZzA2VRAPrQxWfLCBJPWTParRmVBE6AdZMeg1pIuoIJ0JGgkiR/pnWlX7Hy90c741ctny3RrOpCkAHoCSKj4Tw+LwPwbsEjQMD+HaugYjCWLwIZY5/KVJj1Amo3D+GYay2e2510+byegjSfeaadLTG2n6MNiPDGIQeZyepUfvvUdP6nDEMo+IhgkKGUiOoOkiTXSuIY9EXzkDtIJ9hUDC8TW4pyEEAwQVj86Pybp7QcW1dFAviIlEcq6+aDmjUbHXqDr7UrHWzcJuLdymAUJ6x5swG9XJtZoZYy81hHUj1jSohKi5kGGORxqw+yT/aJ0qFqyCxK7I/DuKO6Q6Rl0LA6NHMSJFJwXEcJeLILqs5BEKddfunmam4Pw3atMbi2rbgZmHkGckg+UHauOXcGxdvLl8zafdMnT229q0YsUZ2V5ZcdHZLV74IKoBCnYEN9Y59qh4/G3GWbaSDqSRECdYPWuX2+FMDOaOpB9+VPiw4AU3HyiQBmaNd9J2qz+JT0yDzfGqN1w25bdsjXv+oSYUPJMe+p7VYr4fR5aGGsGZB/7hXM7eEUbaEag/rU44u6RHxrsf/I37034tdMUczSo3/EHt4SySURywKhWAl53k8hGtc/FqdqMsWiWZj1Ylj9TTiGBpV+LHwRXOXJhCxEVGxF8scq7cz+gpF7Es5yqdNif2qZhrGUVKUqHCF9icNhstSloAUYqll6VCqFAChSGCaNEJMAEnoBP4U2X7VpfBnEQjtbIUZgz5jqTlAhfTUmlJ0rApUwN0zFtzG/kb9qZxPD740Nm4P8AY3r0rqGAxL3DJgKOnOOtKxOBec1ttfuljlP+3/NVRz+0hvH6bo469hwYKMD0KmfpSYjfSun3MFiVYssjMRnBOcafck+QHmIq2TCeTzqpfnEGKtXlforlgr2ceXCXHEojsOoViPwFGvCr52tPz+yeX/muu3kCgCdzAAHadY2qpu3lzEHUj2HoOppPyX9CWFse8I4u2mFVSjKByIBMnduRJJk1KPFQz5begXVi0+YA7KWBA9hNUmNuXUUEK4Vukzpvz017UngfGIc2roJfUrI5DkehG1c/LLIrkl/s0Y3G+Ps1+LzMnkui20fdVhPcEflUHC8QQMFu30N1Rr8qTI3y5jA+lRn4hZ18wk8td/SstiuGo5drfMyRAlTAk7SR71HFnc7tUXLC7qjoJso4zkITyIIkj3HvzpjDZncwEIHMglj0jbvvWYwGBdECuUdJJysDI03UkSvLTttrVPwnhfxbjOVKZHCsxUBiV1AWZgDymdxIjark77Iyiop07N5xS4QSrvaRCNrnlkdVYP8AmKi2eE5rUWriAEAjL8je4BnsQOVTBwpCsPLGIlmJkdKdwroiIi/ZEERHWoqSb2iCbS0VyAo/w7gQ6SIyx6CVH41BdLBL/BJRxoUyAhv9sajXkau+IYtRGUz/AGxqZ0Pm2X17d6hYf4E51LTOxEn9j9aT4+icZe2PvdS1aDtbjQEqiyRO8RvTtm6hXPm8pHORE/lTeLxqZWUOc3ZC3tqIk9KfwSQmY6dZGWDzqaaboi1q2V2IvP8AFS1ZUZIzO3QcgNedZLxpwAo74lIyEqXUCCrGATAGoJjXeTWox2JK3Fa24mfMu4I5g1M4rgRet3EYjzLoN9Y8pPoYPtVmKfF2v+RHLG4pHIi+kDamiKSpI30O0dD3pVdMwhGgKMClxFNIQtV02qJiLhchU0XmevYUb3y2i7Dc/pU23bEzlVeyiAPQcqhKVaJwhe2Iw2GC1KAo1WlVS2aEqEAUoUCKDDWkAdChQoAiXrsHSrrwlYzO99yMigpHOWgz12H41mGM1Z8DxuUvbGmcHUbyIAnsNfqanmi1B8TOpvkmdY4HcDIoW2QoEBxlAYDYgD8+1P2+J2jca3nGdd9DA7ZiIn3prwxbyYa2h+ZVIbl5szMY7ST9KyfiRsRcvRh1VcpZWRSuZjpmaDoSBHesSXSNUflbZs/6y2xyrcUsdgHUn2EmadIEaCO5rEphAMqo1u5kYfEcuEyGYKsB+AAMnnWpwPDXV2c3DqREhWzKPy9d6PdUScUldkZuH3nUrcvLrqAqkDsD5vMPXeq7jPDVQ2nDFERlZ1W2pz5WDaSJU6cjzrXFAOYHQHT6UxibqJ82aOuUkfWm0kJOT0YrGcZs5z/15A5Ml0QNvuAHbY0xxLjyXEVUgZTq2RpJ5QWExWzv8NRzmEeYGCAOm4ozwRCioZIAGoMMY6nny7VDi3rdEouEZKS7Of2rynzaETEj8tJqZgQyPmBMDUxz57jatLd8PYZ5hEJiCwPm0/uFM4Tw4LBItOWU/Mr+fWOTDUctDPaKreKlcTU/KuLi0VNjibXHN1VzIoAAEDKRqQVJmTK1PwOIS7qAQ51Zdvfvpp7VOw3CVCMotLrMkHN6DzRFV2Bt3kdwbbW03UgqW3I2bcepHaeQ42c9OSlRaOuJEDcdcvL1rOcc4jdSVVmDiNAGMToDtHtzrT/8wvIsG27DeQs+miyQfasTifEto3Ge41v5gCrBkZShlQysJ0PUa/hSjgt8lZOU2kKvJeREdkzhjEjRhP3uoPIjmQO9MNxAAolstmcgAAHQDVj2gSfansZxmzcUFbtpRuqlwCWkxpuBmPvVS2G+KM4vWwVJDMWWII9YMzEcxHpVqxW7aIQyNOmdD4Zg2I8sXCPt8wP7ZMEnrVfj8MxLEM7sukFyCCdxDHy71VcD8ZLhrPw2KMyaAB1BIJjy6kEL9dKhti8RiLrXwQiEhipYZSpgZWB0MlQQw1GY9qX4Wuy1Tbdk63bIYFlESPtCSOZnnpWu/rrLGQ4zAZQOsa8v5pWZtcORyCrAE65TBP12Yd6Vj/hYZQ731QgMVGhZiBHlUak69PWiMJdJEpzT7ZgOJZfj3CjBlLuVIIIKliVIjSIIimkpeKKPcdrc5CxK5gAYOuoHOpfDbttMxe2XMrli4UgiZnymQdOmxjrXVj0c+XYzfCKqAhs+peRoJjIFH+nUk/e7VAuXC5yrtzP6Cl4q+112jQEksRpJJ1CxUrDWIHpSlKtInCF7YeGsADp2qUEogtGj9apL+hVHFAUJpAA0KANBV7/WgAqFHQoApamcGe2l4PecoignQEliPlTQczr/ALY51Dmm76zpWmUbTTMaOyeGOJm7h86IGB2DNlIMTBhTqQwp69w4FxdusViPLG2ugzag+34VUeA+Hvbwoh2Vri5xmBy+YmCBzIUD1mdoq8w1y3BQM5dTqfM4LCNdZ36H261y5pJ0vRuxtpWTb/D0ePmUb+UxNC6pKQjEADVtGLRuCDvPqKXhWuQWuEQQIUCCvWTzml3HZUJRQWg5QTAnkDG1FX0FtPexFzDJcXVQTGmYaimeG8LNuSzl2gLJnblptzpu3au3bQ+KoS7/AGzAjqedWtlTlA+1G5M696aVvaG20tMjjEIAyZgMuhkxr0B60xaVU1+I7ltpMg9Nt9Kl3bYCk5VY6mAAJb3qnxlpyMxBU7wvI9NBHvUZWtDjTIPEOO37F7J/TZ0gmUBM+kAkRzkVcYXF3HyOFyowlkdCrLy0I/UU3gcWWH/VQaGAxEme+mhqTjfi5gVClFGqzBProfpRetDfdNEa5i7RuCCWcTADQv4GCaXZtMzS7jWYWIgdp1NSMJdR/ly5huAII5dKi8R4P8QoytkKknMBJ5cjpQ4t7C109D2JN9DNsI680IIb1DSR7R71nvFnhhMWSzWyrsoC3FAJU8s0QWXkQZ0JiK0CX2QhGDNpowBnvm1/zT6gP8rnTU5SJnoRH6VOLp2nsg1raPOmK4W1t3t3FKuhhgeR/URBB5gg00MIp5V2/wAV+Ff6qWVUW4qjLcJIzQfkcBdRE6zoTMbg8x4rwm7hnCXVAJXMCDIIkg69QRqO461vhNSX7Mko0US4WNiR6GKkW8Ow2ZhP9zUsmjBqZEFrC+aTq3WdfrvT/wAETtrtP8/mtImn0ECTRQWArlio7sX8o+XmR9rsO3eie+X0XQcz17D96m4ewF2qMpVpFkIXthYa1H82qWo6USj60Zb+cqpsvSoVFA+1J9aUFpAJVY2pxWmiAomFAC4pJpIfWN/5zpwUAEB1oqVQpgUGaiY0dJY1pMZ2TgrZLNoWi93KghiSFMqMpOsa/hVtbdm+V4YxnZVXKD2ka89axvhjBsLFhHd8uUsyTAl2Yqrc4CwI6zW0e7bKAPAGmnP2A1JrkSfyezoR/qtDuIVyqhGBMjM2kQN9qTjhcMfCYKQRJIkEcx2OtN4S6slLaZV3OYMN/WpOOAygm4EjnIE9N+9Ti1TZFqmkLBKkGGObQmYA7wTpS8S5CEjMTGkCTNRkxltiAWzEEQQCRPWYgUV/EXfiKiIoTdnYyY6KvM8pJjnrsWpRa0yNO9jfDuHEeZ2dm38x16a9ak4i8uWdQsjUZTPQrPsZ/ClsyhGiWiSeZY9NdDUbEcQQISCM33CQSO0Dao6UXRLbexD4lWsuberAc9WkczO5rFPxnGXH+EiMYJVpBGs7lgRGnvWjbxIFHyBmOyroO5Y1AtY++S5tIqBjrCglZ5gkRPeKq/NFVbLUmk9F3hr9rDKPiFLbHfYE+9O8P43bvG4ltyWtwGzLG8wRyYeU6jaKxt7givcLXZZiAxJLHY6+bXX96TatgByjm2WlGK8wIIHvVvJJGflyky94nxg50yXgFBIdQmc8t2GkdI1p+zxe0oWLTs8EBoUHXU6lvwrK8Nx6WrjJiGVVMFG1hpmRoCARHPrV7jeN4XyqhDuQTlQSdBJ1iJgHQmqbnyLm40TLfie27ZMjqCQATk05ebXy66c6z3jvCpiLH9Rbdi1oGNDBBYBxB00iZHTps9fuJke6yZQgzQ7omaJaBroSfTes9ivHTvmVLKhHQrDAnU6H5TtE/wD27SdeHm2mUZOKVGTVSd6cVKNF00p/IOk/zWugkZRCrFRXlzucu3qelLds5hflHMc/TtU2xZC7QD+FQnKtIthC9sLDYeNYjoP8cqlqlEixp+FLA/nSqWy9KhJ7/WjII3170sii0FIAht1owen0/am11+XTtt+FK9d6AHAZ2+lHTajr7UsGgAwKQV5jQ0qklqYA+JR0B7UKAKAmpHD7uS4jzGVgfbmNO1RyKUK0tWY0bPwXxl719kuR5VlQAdsxzLvr9mOkGtnjOOWrKyi5mGkwSPSffrWN/wCHWHwr/EFxT8ZWDAkyMkQIG25ad+Xatnxrh1p0YISPLy/UVyvIqE3SNmGWlyM9j/Ft8gjD23zsYLMFKAdV119496etYB7oRsQWd08wfkY5GIGx2j8qtOE5Ao8omKmYjED7P3T+WlZ/5Cfwrsk4vlaLDBYhVt7A1UcR4pl2Y5jpoMx7DXQVVLxdCwCzoYPQkGCQKmYlw7AMBA16fSqU5RqLd+lRoWPi7kh3hd1zLEmTyOu/M8qffCfEOpgcz1qJbuKkhWJ7TNVnEOLKhl3Fsgc3APqBqTsa2RxtqjPOdttFxcspYTO7CNANOpgT9aYv8TLIUw4DM3PZVHUnn6VTXPF+HZcrl37KhA06s8fgDVVjvGDNmFmwiTEMxkiN5VQB+P12qL8OUulVfZFZUltm1w2KyKUcz058gfbb6VUYnDIxJWF7uAomTrLQOf41hsRxjEOczXOX2VUfpNQbvmMuS56sS2/rWyPjtpKTKnOKdo1GO4phCRJ+IV5IrkH3MCPeq+5x4TFuwFH9xglY5ZPlO+smqfNTbPVsfHiiLysTcw4ZmYkklp1Yt6STq0DSTTyrSLev71IRgJ6davSK2w3fKO+/8+lRGcuY+z259h2pLvnP9v5/4qbh7MDr+YpSl6Jwhe2PYexCkyARGnX0608g67/zakpEH+DvIj0pQFUWaEODvR5v/P70jPHf+fjRFp1FIBZPX60pLZJAXUnYATNIUH07cvbpSgPbt+1AAdNSrDKw5H9DQA5GjbXWST33op66/nQAc0U9KAHMUAZ209qYAk+lKXtREfWg3egAwKFAzQoAoqAoUk1qMRqfBF0h7qgSfI28GBmBj8K11ziCA5GuKJ0E8yeXauacPxtyyS1tspYZToDI7giO9JfG3S2bOxOu5ldRBlfl/CsWbxfyT5Mvjk4xo6LhuIor3SpzqqqR6ywIG2u29N43jlu0MzSrEaBhMmCQAvMTp7iufNibjCGcxIOVZUaAj8jUcXYJj0PekvEXK2CyujYnxjmWAjII8xGuc+9Rk8TNmJNsZf8AWSe06RHtz3rPJckUWarl48PoHllRNxuLd3L53XWVVWKhRyAyxrtrUIW1B0A/elrSHfWrYxSVIrbsWz0gUmaGapURsFwxTWanDrSClFAFmoZdaUqk7UuABqadAEqz6U07Z/KPl/8A1/ilLL/LovX73+KnWrMDSoSlWkWQhe2ItYfL09qkosUS0ebrVNl9Ajpp+tKQ8tu37UmaCiaQxwClZOY3pIMUsmgABvr/ADaj9aICjmN6ACnrt1oE9PrSqT6fSgAgKGaKMDpRqOQoACba0tF07Uei9z0pvNO/0pgKL9BQoRQoEUNEKFCtXoxjwohQoUmMWv6VGTc0VCkwQlafG9ChQMfXYUzzoUKADf5R/OZpK70KFMQoUlqFCgB6xsaruI7j+c6OhTfQFjY3qWKOhWaRqj0IFG1ChSJBrypS86FCkApaJNzQoUAO0Qo6FABCkJ8x9KFCgB56XboUKYMYPzUo0dCgAUKFCgR//9k="
              alt=""
              className="featuredImg"
            />
        <div className="featuredTitles">
            <h1>Veggie quesadillas</h1>
            
        </div>
      </div>
      <div className="featuredItem">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="featuredImg"
          />
        <div className="featuredTitles">
            <h1>Veggie Sandwich</h1>
            
        </div>
      </div>
    </div>
  )
}

export default Lunch