let aaa = async () => {
    setTimeout(() => {
      document.getElementById("typerr").innerHTML = "detecting device......"
    }, 1000)
  }
  
  let ccs = async () => {
    setTimeout(() => {
      document.getElementById("anime0").style.color = "#00ff00"
    }, 500)
  }
  
  let ddds = async () => {
    setTimeout(()=>{
    let platform = document.getElementById('platform');
  
    if (navigator.userAgent.match(/iPhone/i)) {
      platform.textContent = "detected It's iPhone";
    } else if (navigator.userAgent.match(/iPad/i)) {
      platform.textContent = "detected it's iPad";
    } else if (navigator.userAgent.match(/Windows/i)) {
      platform.textContent = "detected it's windows";
    } else if (navigator.userAgent.match(/Mac OS X/i)) {
      platform.textContent = "detected It's Mac!!";
    } else if (navigator.userAgent.match(/Android/i)) {
      platform.textContent = "detected It's Android!!";
    } else {
      platform.textContent = "It's blackbarry!!";
    }
  },5000)
  }
  ddds()
  let a = async () => {
    setTimeout(() => {
      document.getElementById("typer").innerHTML = "Initializing hack program......"
    }, 4500)
  }
   cer = async () => {
    setTimeout(() => {
      document.getElementById("anime").style.color = "#00ff00"
    }, 5500)
   }
  let name = prompt("Enter your name")
  let b = async () => {
    setTimeout(() => {
  
      document.getElementById("nello").innerHTML = `Hacking  ${name}  instagram Handle`
    }, 6000)
  
  }
  
  let c = async () => {
    setTimeout(() => {
      document.getElementById("anime1").style.color = "#00ff00"
    }, 5500)
  }
  let w = async () => {
    setTimeout(() => {
      document.getElementById("nello1").innerHTML = `Found ${name} instagram username `
    }, 6500)
  
  }
  let rc = async () => {
    setTimeout(() => {
      document.getElementById("anime2").style.color = "#00ff00"
    }, 5000)
  }
  let m = async () => {
    setTimeout(() => {
      document.getElementById("nello2").innerHTML = `Found ${name} instagram password`
    }, 8500)
  
  }
  let f = async () => {
    setTimeout(() => {
      document.getElementById("anime3").style.color = "#00ff00"
    }, 7500)
  }
  
  let dddd = async () => {
    setTimeout(async () => {
      let i = 0
      while (i !== 100) {
        let ran = Math.floor(Math.random() * 5)
        i = i + ran
        if (i > 100) {
          i = 100
        }
        await new Promise(r => setTimeout(r, 50));
  
  
        document.getElementById("text").innerHTML = `sending ${i}%`
        //console.log(i)
  
      }
    }, 10500)
  
  
  }
  let faa = async () => {
    setTimeout(() => {
      document.getElementById("anime5").style.color = "#00ff00"
    }, 9500)
  }
  
  
  let ma = async () => {
    setTimeout(() => {
      document.getElementById("nello3").innerHTML = ` ${name} username password sended`
    }, 15000)
  
  }
  let fa = async () => {
    setTimeout(() => {
      document.getElementById("anime4").style.color = "#00ff00"
    }, 11500)
  }
  
  
  
  let cc = async () => {
    
    let bbsa = await aaa()
    await ccs()
    let aa = await ddds()
    let dd = await a()
    await c()
    let bb = await b()
    await rc()
    let ww = await w()
    await f()
    let yy = await m()
    await faa()
    let zz = await dddd()
    await fa()
    let nn = await ma()
  
  }
  cc();