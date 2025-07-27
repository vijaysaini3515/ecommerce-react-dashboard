

const Badge = ({status}) =>{
    return(
        <span 
          className={`inline-block py-1 px-4 rounded-full text-[10px] capitalize 
            ${status === 'pending' && 'bg-[var(--primary)] text-white'}
            ${status === 'confirm' && 'bg-green-400 text-white'}
            ${status === 'delivered' && 'bg-green-900 text-white'}
            
            `}
        >
            {status}
        </span>
    )
}

export default Badge;