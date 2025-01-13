import EmojiButton from './EmojiButton'

export default function MemoryCard({ handleClick,data,selectedCards,matchedCards }) {

    
    
    const cardEl = data.map((emoji, index) => {
        const selectedCardEntry = selectedCards.find(card => card.index === index) ;
        const matchedCardEntry = matchedCards.find(card => card.index === index) ;
        let cardStyle ;
        if(matchedCardEntry){
            cardStyle = "card-item--matched" ;
        }
        else if(selectedCardEntry){
            cardStyle = "card-item--selected" ;
        }
        else {
            cardStyle = "" ;
        }
        return (
            <li key={index} className={`card-item ${cardStyle}`}>
                <EmojiButton 
                    handleClick={() => handleClick(emoji.name, index)} 
                    index = {index}
                    emoji={emoji}
                    selectedCardEntry={selectedCardEntry} 
                    matchedCardEntry={matchedCardEntry} 
                />
            </li>
        );
    });
    
    
    return <ul className="card-container">{cardEl}</ul>
}