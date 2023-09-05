// darle clic a unos post en especifico

var ids= [1808,1800,3198,4818,2278,1792,2935,3734,2193,1806,3271]

ids.forEach(x=>{
	const check_id = "cb-select-"+x
    document.getElementById(check_id).click()
})
