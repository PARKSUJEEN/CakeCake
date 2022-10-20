import React, {useState} from 'react'
import { Input } from 'antd'

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerm, setSearchTerm] = useState('')
    const searchHandler = (e) => {
        setSearchTerm(e.currentTarget.value)
        props.refreshFunction(e.currentTarget.value)
    }

    return (
        <div>
            <Search
                placeholder='검색해보세용'
                onChange={searchHandler}
                style={{ width: 200 }} 
                value={SearchTerm}
            />
        </div>
    )
}

export default SearchFeature