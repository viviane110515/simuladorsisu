function calcular(){
    if (redac.value.length == 0 || ling.value.length == 0 || hum.value.length == 0 || nat.value.length == 0 || mat.value.length == 0){
        alert("Preencha todos os campos com a sua nota!") 
    }

    if (redac.value > 1000 || ling.value > 1000 || hum.value > 1000 || nat.value > 1000 || mat.value >1000 ){
        alert("Preencha as notas corretamente")
    }

    else {

            let res = document.getElementById('res')
            let curso = document.getElementById('curso').value
            
            let redac = document.getElementById('redac').value
            redac = parseFloat(redac)
            let p_redac = document.getElementById('p_redac').value
            p_redac = parseInt(p_redac)

            let ling = document.getElementById('ling').value
            ling = parseFloat(ling)
            let p_ling = document.getElementById('p_ling').value
            p_ling = parseInt(p_ling)

            let hum = document.getElementById('hum').value
            hum = parseFloat(hum)
            let p_hum = document.getElementById('p_hum').value
            p_hum = parseInt(p_hum)

            let nat = document.getElementById('nat').value
            nat = parseFloat(nat)
            let p_nat = document.getElementById('p_nat').value
            p_nat = parseInt(p_nat)

            let mat = document.getElementById('mat').value
            mat = parseFloat(mat)
            let p_mat = document.getElementById('p_mat').value
            p_mat = parseInt(p_mat)
            
            let media = redac * p_redac + ling * p_ling + hum * p_hum + nat * p_nat + mat * p_mat

            let media2 = (media / (p_redac + p_ling + p_hum + p_nat + p_mat)).toFixed(2)


            res.innerHTML = `Sua média no curso <b>${curso}</b> é <b>${media2}</b>`
    }
}