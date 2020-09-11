import React from 'react'
import Card from '@material-ui/core/Card';
import './style.css'
import { CardContent } from '@material-ui/core';
function Content() {
    return (
        <div className='splitright right goodfont'>
            <Card variant='outlined' >
               <CardContent>
                   Hello there
               </CardContent>
            </Card>
        </div>
    )
}

export default Content
