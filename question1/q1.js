const express=require('express');
const app=express();
const http=require("http");
const odd=[1,3,5,7,9,11,13,15,17,19,21,23];
const fibo=[1,1,2,3,5,8,13,21];
const primes=[2,2,3,5,7,11,13];
const rand=[5,17,3,19,76,24,1,5,10,34,8,27,7];
const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.get('*',(req,res)=>
{
	var ans=req.query.url;
	var s=" ";
	var s1=" ";
for(var i=0;i<ans.length;i++){
	
if(ans.charAt(i)=='0'||ans.charAt(i)=='1'||ans.charAt(i)=='2'||ans.charAt(i)=='3'||ans.charAt(i)=='4'||ans.charAt(i)=='5'
||ans.charAt(i)=='6'||ans.charAt(i)=='7'||ans.charAt(i)=='8'||ans.charAt(i)=='9'||ans.charAt(i)=='.')
s+=ans.charAt(i);
}
var ans1=s.split(".");
var count=0;
var a;
for(var i=0;i<ans1.length;i++){
	a=parseInt(ans1[i]);
	if(a>0 && a<=255)
	count++;
}
var a=[];
var j=1;

if(count==ans1.length){
	var q=ans.split("/");
	var que=q[q.length-1];
	if(que=="primes")
	{
		a[0]=primes[0];
		for(var i=1;i<primes.length;i++){
			if(primes[i]==primes[i-1])
			continue;
			else
{
	a[j]=primes[i];
	j++;
}

		}
	res.send(a);
	}

	else if(que=="odd")
	{
		a[0]=odd[0];
		for(var i=1;i<odd.length;i++){
			if(odd[i]==odd[i-1])
			continue;
			else
{
	a[j]=odd[i];
	j++;
}

		}
	res.send(a);}
	else if(que=="fibo")
	{
		a[0]=fibo[0];
		for(var i=1;i<fibo.length;i++){
			if(fibo[i]==fibo[i-1])
			continue;
			else
{
	a[j]=fibo[i];
	j++;
}

		}
	res.send(a);}
	else if(que=="rand")
	{
		a[0]=rand[0];
		for(var i=1;i<rand.length;i++){
			if(rand[i]==rand[i-1])
			continue;
			else
{
	a[j]=rand[i];
	j++;
}

		}
	res.send(a);
	
	}
	}
else
res.send("Not valid url");
});

app.listen(3010);