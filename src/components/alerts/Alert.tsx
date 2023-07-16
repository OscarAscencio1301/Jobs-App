
import { FcApproval } from "react-icons/fc";
import { useComponents } from "../../hooks/components/useComponents";

export const Alert = ({ text = "Cambios aplicados" }: { text?: string }) => {

  const {isOpenAlert, changeViewAlert} = useComponents()

  return (
    <div className={`w-full h-full bg-opacity-50 bg-black fixed top-0 left-0 flex items-center justify-center z-50 ${isOpenAlert ? 'flex' : 'hidden'}`}>
      <div className="bg-white flex flex-col items-center justify-center gap-4 p-5 rounded-md">
        <FcApproval size="120px" />
        <h2 className="text-3xl">{text}</h2>
        <button className="bg-green-600 text-white py-2 px-10 rounded-md flex-1" onClick={changeViewAlert}>Aceptar</button>
      </div>
    </div>
  )
}
