interface BodyProps {
      children: React.ReactNode
}

const Body = ({ children }: BodyProps) => {
      return (
            <div className="flex flex-col justify-center items-center w-full h-full opacity-100 min-h-screen bg-black">
                  {children}
            </div>
      )
}

export default Body
