window.addEventListener("load", function(){
	
	let klik;
	let flag=true;
	let licznik=0;
	const x = "X";
	const o = "O";
	let head = document.getElementById("header");	
	const foot = document.getElementById("footer");
	const button = document.getElementsByTagName("button");
	
	foot.addEventListener("click", function(){
		location.reload();
	});
	
	for(let i=0;i<button.length;i++){		
			button[i].addEventListener("click", function(){
				change();
				button[i].innerHTML = klik;
				this.disabled = true;		
				console.log(licznik);
				if(licznik == 9){
					head.innerHTML = "remis :(";
					foot.style.display = "inline-block";
				}
				if((button[0].innerHTML=="X"&&button[1].innerHTML=="X"&&button[2].innerHTML=="X")||
				(button[0].innerHTML=="X"&&button[3].innerHTML=="X"&&button[6].innerHTML=="X")||
				(button[2].innerHTML=="X"&&button[5].innerHTML=="X"&&button[8].innerHTML=="X")||
				(button[6].innerHTML=="X"&&button[7].innerHTML=="X"&&button[8].innerHTML=="X")||
				(button[6].innerHTML=="X"&&button[4].innerHTML=="X"&&button[2].innerHTML=="X")||
				(button[0].innerHTML=="X"&&button[4].innerHTML=="X"&&button[8].innerHTML=="X")||
				(button[1].innerHTML=="X"&&button[4].innerHTML=="X"&&button[7].innerHTML=="X")||
				(button[3].innerHTML=="X"&&button[4].innerHTML=="X"&&button[5].innerHTML=="X")){
					head.innerHTML = "X wygrywa!";
					for(let i=0;i<button.length;i++){
						button[i].disabled=true;
					}
					foot.style.display = "inline-block";
				}
				if((button[0].innerHTML=="O"&&button[1].innerHTML=="O"&&button[2].innerHTML=="O")||
				(button[0].innerHTML=="O"&&button[3].innerHTML=="O"&&button[6].innerHTML=="O")||
				(button[2].innerHTML=="O"&&button[5].innerHTML=="O"&&button[8].innerHTML=="O")||
				(button[6].innerHTML=="O"&&button[7].innerHTML=="O"&&button[8].innerHTML=="O")||
				(button[6].innerHTML=="O"&&button[4].innerHTML=="O"&&button[2].innerHTML=="O")||
				(button[0].innerHTML=="O"&&button[4].innerHTML=="O"&&button[8].innerHTML=="O")||
				(button[1].innerHTML=="O"&&button[4].innerHTML=="O"&&button[7].innerHTML=="O")||
				(button[3].innerHTML=="O"&&button[4].innerHTML=="O"&&button[5].innerHTML=="O")){
					head.innerHTML = "O wygrywa!";
					for(let i=0;i<button.length;i++){
						button[i].disabled=true;
					}	
					foot.style.display = "inline-block";
				}
				
			});		
	}
	
	function change(){
		if(flag==true){
			head.innerHTML = "ruch O";
			klik = x;
			flag = false;		
			licznik++;
		}else{
			head.innerHTML = "ruch X";
			klik = o;
			flag = true;
			licznik++;
		}
	}	
});