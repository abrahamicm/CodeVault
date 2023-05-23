```javascript
#[wordpress] #[javascript]
var ids= [1808,1800,3198,4818,2278,1792,2935,3734,2193,1806,3271]

ids.forEach(x=>{
	const check_id = "cb-select-"+x
    document.getAnimations(check_id).click()
})
````