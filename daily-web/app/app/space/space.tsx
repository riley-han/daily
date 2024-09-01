"use client"
import React from 'react'

type SpaceImage = {
    url?: string
    media_type?: string
}

const Space = () => {
    const [spaceImage, setSpaceImage] = React.useState<SpaceImage | null>(null)
    const [selectedDate, setSelectedDate] = React.useState<string >('')
    const getDailySpaceImage = async () => {
        // I know the key is here, just dont use it if you find in on github. thanks. im just testing. lol
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=PEwvkar1mniPW0ThMo8DgygCe3iIqa5myJEXcypR&date=${selectedDate}`)
        const data = await response.json()
        setSpaceImage(data)
        return data
    }

    return(
        <div className="flex flex-col items-center p-4 h-screen">
            <h1 className="text-4xl font-bold mb-6">Daily Space</h1>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input 
                    type="date" 
                    value={selectedDate} 
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="p-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                    disabled={selectedDate === ''}
                    onClick={() => {
                        if(!selectedDate) {
                            return
                        }
                        getDailySpaceImage()
                    }} 
                    className="px-4 py-2 text-base bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                    Get Daily Space Image
                </button>
                {spaceImage && (
                    <button onClick={() => {
                        window.open(spaceImage.url, '_blank')
                    }}>open image</button>
                )}
            </div>
            <div className="flex-grow overflow-auto w-full flex items-center justify-center">
                {spaceImage?.media_type === 'image' && spaceImage?.url ? (
                    <img 
                        src={spaceImage.url} 
                        alt="Space image of the day" 
                        className="max-w-full max-h-[calc(100vh-12rem)] object-contain rounded-lg shadow-md"
                    />
                ): (
                    <div className="text-center text-gray-500">
                        <p>{!spaceImage ? 'Select a date to explore space' : 'No image available for this date. Please try a different date.'}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Space;