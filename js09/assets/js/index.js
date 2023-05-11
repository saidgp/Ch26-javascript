console.log("Js 09 uso de Axios");

const url = "https://reqres.in/api/users?page=2"
getUsersFetch = () => {

    fetch ( url )
    .then( response => response.json() )
    .then( users => {
        console.log(users.data )
    })
    .catch( error => console.log(error));
}

const getUsersAxios = () =>{

    axios.get( url )
    .then( users => {
        console.log(users.data.data);
    } )
    .catch( error => console.log(error));
}

const axisAwait= async () =>{
    await axios.get(url)
    .then(user => {
        console.log(user.data.data);
    })
    .catch( error => console.log(error));
} 

const axisTry = async () =>{
    try {
        const user = await axios.get(url)
        console.log(user.data.data);

    } catch (error) {
        console.log(error.masage)
    }
}
const userData = {name: "Red", job: "Ranger", zord:"Red lion"}
const AxiosPost = () => {

    axios.post(url, userData)
      .then(user => {
        console.log(user.data);
    })
      .catch(function (error) {
        console.log(error);
      });
    }