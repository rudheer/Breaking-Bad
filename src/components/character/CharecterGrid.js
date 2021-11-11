import React from 'react'
import Spinner from '../ui/Spinner'
import Characteritem from './Characteritem'

const CharecterGrid = ({items,isLoading}) => {
    return isLoading ? <Spinner/> : <section className="cards">
        {items.map(item=>(
            <Characteritem key={item.char_id} item={item} />
        ))}
    </section>
}

export default CharecterGrid
