

document.addEventListener("DOMContentLoaded", function() {
    function addEmojiWrapper(button, emojis) {
        const wrapper = document.createElement('div');
        const emojiWrapper = document.createElement('div');
        button.replaceWith(wrapper);
        wrapper.appendChild(button);
        wrapper.appendChild(emojiWrapper);
        wrapper.style.zIndex = 99999;
        wrapper.style.position = 'relative';
        wrapper.style.transform = 'translateZ(0)';

        emojiWrapper.style.position = 'absolute';
        emojiWrapper.style.top = '0px';
        emojiWrapper.style.right = '0px';
        emojiWrapper.style.pointerEvents = 'none';
        emojiWrapper.classList.add('emojiWrapper');
        button.addEventListener('mouseenter', function() {
        emojisplosion({
            emojis: emojis,
            container: emojiWrapper,
            physics: {
            fontSize: 28,
            initialVelocities: {
                rotation: {
                max: 28,
                min: -28,
                },
            },
            rotationDecelaration: 1.01,
            },
            position: () => ({
            x: -(button.offsetWidth / 2),
            y: (button.offsetHeight / 2)
            }),
        });
        });
    }
    
    const emojiButtons = document.querySelectorAll('[data-trigger="emoji"]');
    emojiButtons.forEach(function(button) {
        addEmojiWrapper(button, ["🤝", "🤩", "🦄", "🔥", "🍒", "🎯", "💓", "✔️", "🎉", "👏"]);
    });
    
    const emojiButtonsNo = document.querySelectorAll('[data-trigger="emoji-no"]');
    emojiButtonsNo.forEach(function(buttonNo) {
        addEmojiWrapper(buttonNo, ["😐", "🚫", "🤚", "🏃‍♂️", "🐴", "🌝", "🍂", "🪗", "🗿", "🧻"]);
    });
    
    const emojiButtonsNext = document.querySelectorAll('[data-trigger="emoji-next"]');
    emojiButtonsNext.forEach(function(buttonNext) {
        addEmojiWrapper(buttonNext, ["☝️", "💰", "🚀", "😎", "🔮", "!?️", "🏁", "🤔", "🦄", "🐴"]);
    });
    
    const emojiButtonsSee = document.querySelectorAll('[data-trigger="emoji-see"]');
    emojiButtonsSee.forEach(function(buttonSee) {
        addEmojiWrapper(buttonSee, ["💎", "😮", "🥂", "🎊", "🥳", "💸", "💡", "💙", "👍", "🆒"]);
    });
   
});
