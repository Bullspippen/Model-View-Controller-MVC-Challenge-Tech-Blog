const editPost = async (event) => { 
    event.preventDefault();
    document.location.href=`/editpost/${document.URL.substring(document.URL.lastIndexOf('/') + 1)}`;
};

document.querySelector('#edit_post').addEventListener('click', editPost);

const deletePost = async (event) => { // to delete post
    event.preventDefault();
    document.location.href=`/deletepost/${document.URL.substring(document.URL.lastIndexOf('/') + 1)}`;
};

document.querySelector('#delete_post').addEventListener('click', deletePost);