import { checkUrl } from "./checkURL"


  export function handleSubmit(e){
    e.preventDefault()
    let urlEnterd = document.getElementById('article-url').value
    console.log(urlEnterd)
    if(checkUrl(urlEnterd)){
      postData('http://localhost:8000/api', {url: urlEnterd}).then((res)=>{
          console.log('serverData is ',res)
          updateUI(res)
          
      })
    }else{
       alert('you should enter url ')
    }
  }
  const postData = async (url = "", data = {}) => {
    console.log('first check', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data form the server', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};
function updateUI(data){

    document.getElementById('agreement').innerText = `agreement  : ${data.agreement}`
    document.getElementById('confidence').innerText = `confidence  : ${data.confidence}`
    document.getElementById('irony').innerText = `irony  : ${data.irony}`
    document.getElementById('score_tag').innerText = `score  : ${data.score_tag}`
    document.getElementById('text').innerText = `Text is : ${data.sentence_list[0].text}`
}