const door = document.getElementById('door-anim')

door.addEventListener('mouseenter', function() {
    door.classList.remove('pulse')
    door.classList.add('hover')
})

door.addEventListener('mouseleave', function() {
    door.classList.add('pulse')
    door.classList.remove('hover')
})