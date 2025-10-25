type Props = {
    month?: string;        // "Sept."
    days?: number[];       // [17, 18]
    location?: string;     // "CDMX, MX"
  };
  
  export default function EventHeader({
    month = "Sept.",
    days = [17, 18],
    location = "CDMX, MX",
  }: Props) {
    return (
      <div className="w-full bg-primary text-white rounded-md px-6">
        <div className="flex items-center justify-between">
          {/* Izquierda: Mes + días */}
          <div className="flex items-center gap-3">
            <span className="text-[28px] font-semibold leading-none">{month}</span>
  
            <div className="flex items-center gap-2">
              {/* Día 1 */}
              {days[0] !== undefined && (
                <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full
                           text-2xl font-bold text-white bg-[#A87AB9]"
              >
                {days[0]}
              </span>
              )}
  
              {/* Día 2 */}
              {days[1] !== undefined && (
                <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full
                           text-2xl font-bold text-white bg-[#586FC0]"
              >
                {days[1]}
              </span>
              )}
            </div>
          </div>
  
          {/* Derecha: ubicación */}
          <div className="text-2xl md:text-3xl font-normal tracking-wide">
            {location}
          </div>
        </div>
      </div>
    );
  }
  