const scrollingDiv = document.querySelector('.scrolling-div');
        const scrollingContent = document.querySelector('.scrolling-content');
        const items = document.querySelectorAll('.scrolling-item');
        let currentItemIndex = 0;

        function scrollNextItem() {
            const nextItemIndex = (currentItemIndex + 1) % items.length;
            const distance = nextItemIndex * scrollingDiv.offsetWidth;
            scrollingContent.style.transform = `translateX(-${distance}px)`;
            currentItemIndex = nextItemIndex;
        }

        setInterval(scrollNextItem, 6000);


        function toggleSidebar() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('open');
        }
        



        document.getElementById('donation-form').addEventListener('submit', function(event) {
            event.preventDefault(); 
            var formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                amount: document.getElementById('amount').value,
                message: document.getElementById('message').value
            };

           
            console.log('Form data:', formData);
            alert('Thank you for your donation, ' + formData.name + '!');   // Reset the form
            document.getElementById('donation-form').reset();
        });