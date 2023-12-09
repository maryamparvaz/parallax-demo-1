 let _main = document.getElementsByTagName('main')[0]
        let _span = document.getElementById('_span')
        let _left = document.getElementById('left')
        let _right = document.getElementById('right')
        let pageone = document.getElementById('pageone')
        let page2 = document.getElementById('page2')
        let fig = document.getElementById('fig')
        let imgs = document.getElementById('imgs')
        let page3 = document.getElementById('page3')
        let page4 = document.getElementById('page4')
        let page5 = document.getElementById('page5')
        let page6 = document.getElementById('page6')
        let page7 = document.getElementById('page7')
        let p1 = document.getElementById('p1')
        let p2 = document.getElementById('p2')
        let p3 = document.getElementById('p3')
        let p4 = document.getElementById('p4')
        let hone = document.getElementById('hone')
        let htwo = document.getElementById('htwo')
        let hthree = document.getElementById('hthree')
        let hfour = document.getElementById('hfour')
        page2.style.top = ((pageone.clientHeight) + 300) + 'px'
        page3.style.top = ((pageone.clientHeight) + (page2.clientHeight) + 500) + 'px'
        page4.style.top = ((pageone.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + 500) + 'px'
        page5.style.top = ((pageone.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + (page4.clientHeight) + 800) + 'px'
        page6.style.top = ((pageone.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + (page4.clientHeight) + (page5.clientHeight) + 1100) + 'px'
        page7.style.top = ((pageone.clientHeight) + (page2.clientHeight) + (page3.clientHeight) + (page4.clientHeight) + (page5.clientHeight) + (page5.clientHeight) + 1500) + 'px'
        const color1 = ['#734700', '#D88500', '#FF9D00']
        const color2 = ['#7AFF8E', '#63CF73']
        const color3 = ['#4B4B4B', '#393939']
        const color4 = ['#956077', '#e88cb5']

        _main.addEventListener('scroll', (e) => {
                let st = e.target.scrollTop
                // _span.innerHTML = st

                if (st <= 1200) {
                        pageone.style.position = 'fixed'
                        pageone.style.zIndex = '-10'
                        fig.style.scale = (st / 2500) + 1

                }
                else {
                        pageone.style.position = 'relative'
                }
                _left.style.left = -(st - 200) + 'px'
                _right.style.right = -(st - 200) + 'px'
                if (st <= ((pageone.clientHeight))) {
                        fig.style.position = 'fixed'
                        fig.style.transform = 'translate(-50% ,-50%)'
                        fig.style.top = '50%'
                        fig.style.left = '50%'
                } else {
                        let x = imgs.appendChild(fig)
                        fig.style.position = 'relative'
                }
                // page3
                if (st <= page3.offsetTop) {
                        page3.style.position = 'absolute'
                        page3.children[0].style.position = 'absolute'
                } else {
                        page3.children[0].style.position = 'fixed'
                        page3.children[0].style.top = 0
                        page3.children[0].style.zIndex = '-10'
                }
                // page 4
                if (st >= page4.offsetTop) {
                        if (st >= 1900 && st <= 2200) {
                                page3.children[0].style.background = color1[0]
                        } else if (st >= 2200 && st <= 2500) {
                                page3.children[0].style.background = color1[1]
                        } else if (st >= 2500 && st <= 3000) {
                                page3.children[0].style.background = color1[2]
                        } else if (st >= 3000 && st <= 3400) {
                                page3.children[0].style.background = color2[0]
                        } else if (st >= 3400 && st <= 3700) {
                                page3.children[0].style.background = color2[1]
                        } else if (st >= 3700 && st <= 3900) {
                                page3.children[0].style.background = color3[0]
                        } else if (st >= 3900 && st <= 4100) {
                                page3.children[0].style.background = color3[1]
                        } else if (st >= 4800 && st <= 5000) {
                                page3.children[0].style.background = color4[0]
                        } else if (st >= 5000 && st <= 5200) {
                                page3.children[0].style.background = color4[1]
                        }
                        for (let i = 0; i < 1; i++) {
                                let y = hone.computedStyleMap().get('left').value
                                let y1 = p1.computedStyleMap().get('left').value
                                let u = y + 20
                                let u1 = y1 + 20
                                hone.style.left = -((st / 5) - u) + 'px'
                                p1.style.left = -((st / 6) - u1) + 'px'
                                i++
                        }

                }
                else if (st <= (page4.offsetTop + 900)) {
                        hone.style.left = '600px'
                        p1.style.left = '30px'
                        page3.children[0].style.background = 'transparent'
                }
                if (st >= page5.offsetTop) {
                        for (let i = 0; i < 1; i++) {
                                let y = htwo.computedStyleMap().get('left').value
                                let y1 = p2.computedStyleMap().get('left').value
                                let u = y + 20
                                let u1 = y1 + 20
                                htwo.style.left = -((st / 5) - u - 90) + 'px'
                                p2.style.left = -((st / 6) - u1 - 90) + 'px'
                                i++
                        }

                }
                else if (st <= (page5.offsetTop + 900)) {
                        htwo.style.left = '600px'
                        p2.style.left = '30px'
                }
                if (st >= page6.offsetTop) {
                        for (let i = 0; i < 1; i++) {
                                let y = hthree.computedStyleMap().get('left').value
                                let y1 = p3.computedStyleMap().get('left').value
                                let u = y + 20
                                let u1 = y1 + 20
                                hthree.style.left = -((st / 5) - u - 290) + 'px'
                                p3.style.left = -((st / 6) - u1 - 290) + 'px'
                                i++
                        }

                }
                else if (st <= (page6.offsetTop + 900)) {
                        hthree.style.left = '600px'
                        p3.style.left = '30px'
                }
                if (st >= (page7.offsetTop)) {
                        for (let i = 0; i < 1; i++) {
                                let y = hfour.computedStyleMap().get('left').value
                                let y1 = p4.computedStyleMap().get('left').value
                                let u = y + 20
                                let u1 = y1 + 20
                                hfour.style.left = -((st / 5) - u - 490) + 'px'
                                p4.style.left = -((st / 6) - u1 - 490) + 'px'
                                i++
                        }

                }
                else if (st <= (page7.offsetTop + 900)) {
                        hfour.style.left = '600px'
                        p4.style.left = '30px'
                }
                let q = document.getElementById('org').clientHeight
                console.log(q);
        })