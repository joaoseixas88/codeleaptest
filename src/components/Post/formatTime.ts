

export function formattedTime(createdAt: string){
        
    const createdAtToDate = new Date(createdAt)
    const now = new Date()

    const timeDiffMinutes = Math.floor((now.getTime() - createdAtToDate.getTime())  / 1000 / 60)
    let timePassed = timeDiffMinutes
    let text = ''
    

    if(timeDiffMinutes > 1440){

        timePassed = Math.floor(timeDiffMinutes / 1440)            
        timePassed > 1 ? text = 'days': text = 'day'

        if (timePassed > 365){
            timePassed = Math.floor(timePassed / 365) 
            timePassed > 1 ? text = 'years': text = 'year'
        }
        

    } else if(timeDiffMinutes > 60) {

        timePassed = Math.floor(timeDiffMinutes / 60)
        timePassed > 1 ? text = 'hours' : text = 'hour'
        
    } else {
        text = 'seconds'
    }                
    
    return `${timePassed} ${text} ago` 
}