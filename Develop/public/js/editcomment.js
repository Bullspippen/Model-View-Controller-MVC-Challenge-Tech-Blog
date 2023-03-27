const editComment = async (event) => {
    event.preventDefault();
    document.location.href=`/editcomment/${document.URL.substring(document.URL.lastIndexOf('/') + 1)}`;
};

document.querySelector('#edit_comment').addEventListener('click', editComment);

const deleteComment = async (event) => { // to delete comment
    event.preventDefault();
    document.location.href=`/deletecomment/${document.URL.substring(document.URL.lastIndexOf('/') + 1)}`;
};

document.querySelector('#delete_comment').addEventListener('click', deleteComment);