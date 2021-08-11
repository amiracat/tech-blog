const newBlogHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#newTitle').value;
    const content = document.querySelector('#newContent').value;

    if (title && content) {
        const response = await fetch('/api/blogosts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Post failed.');
        }
    }
};

document.querySelector('#newBlogForm').addEventListener('submit', newBlogHandler);