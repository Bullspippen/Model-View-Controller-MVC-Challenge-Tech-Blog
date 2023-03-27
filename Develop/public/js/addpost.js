const addPost = async (event) => {
    event.preventDefault();
    document.location.href=`/addpost`;
};

document.querySelector('#add_post').addEventListener('click', addPost);