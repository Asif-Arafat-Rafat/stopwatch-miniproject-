function alarm() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return(
        <>
            <div className="flex justify-center">
                <h1 className="text-white text-4xl">{hours%12}:{minutes}:{seconds}{ (hours>12) ? " PM":" AM"}</h1>
            </div>
        </>
    )
}
export default alarm    