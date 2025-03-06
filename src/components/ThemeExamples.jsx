/**
 * ThemeExamples component
 * 
 * This component demonstrates how to use the custom color palette
 * in your React components with Tailwind CSS classes.
 */

export default function ThemeExamples() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Theme Color Examples</h2>
      
      {/* Brand Green Examples */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Brand Green</h3>
        <div className="flex flex-wrap gap-4">
          <ColorSwatch name="50" color="bg-brandGreen-50" textColor="text-brandGreen-900" />
          <ColorSwatch name="100" color="bg-brandGreen-100" textColor="text-brandGreen-900" />
          <ColorSwatch name="200" color="bg-brandGreen-200" textColor="text-brandGreen-900" />
          <ColorSwatch name="300" color="bg-brandGreen-300" textColor="text-brandGreen-900" />
          <ColorSwatch name="350" color="bg-brandGreen-350" textColor="text-white" />
          <ColorSwatch name="400" color="bg-brandGreen-400" textColor="text-white" />
          <ColorSwatch name="500" color="bg-brandGreen-500" textColor="text-white" />
          <ColorSwatch name="600" color="bg-brandGreen-600" textColor="text-white" />
          <ColorSwatch name="700" color="bg-brandGreen-700" textColor="text-white" />
          <ColorSwatch name="800" color="bg-brandGreen-800" textColor="text-white" />
          <ColorSwatch name="900" color="bg-brandGreen-900" textColor="text-white" />
          <ColorSwatch name="950" color="bg-brandGreen-950" textColor="text-white" />
        </div>
      </div>
      
      {/* Neon Orange Examples */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Neon Orange</h3>
        <div className="flex flex-wrap gap-4">
          <ColorSwatch name="50" color="bg-neonOrange-50" textColor="text-neonOrange-900" />
          <ColorSwatch name="100" color="bg-neonOrange-100" textColor="text-neonOrange-900" />
          <ColorSwatch name="200" color="bg-neonOrange-200" textColor="text-neonOrange-900" />
          <ColorSwatch name="300" color="bg-neonOrange-300" textColor="text-neonOrange-900" />
          <ColorSwatch name="400" color="bg-neonOrange-400" textColor="text-white" />
          <ColorSwatch name="500" color="bg-neonOrange-500" textColor="text-white" />
          <ColorSwatch name="600" color="bg-neonOrange-600" textColor="text-white" />
          <ColorSwatch name="700" color="bg-neonOrange-700" textColor="text-white" />
          <ColorSwatch name="800" color="bg-neonOrange-800" textColor="text-white" />
          <ColorSwatch name="900" color="bg-neonOrange-900" textColor="text-white" />
        </div>
      </div>
      
      {/* Brand Blue Examples */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Brand Blue</h3>
        <div className="flex flex-wrap gap-4">
          <ColorSwatch name="50" color="bg-brandBlue-50" textColor="text-brandBlue-900" />
          <ColorSwatch name="100" color="bg-brandBlue-100" textColor="text-brandBlue-900" />
          <ColorSwatch name="200" color="bg-brandBlue-200" textColor="text-brandBlue-900" />
          <ColorSwatch name="300" color="bg-brandBlue-300" textColor="text-brandBlue-900" />
          <ColorSwatch name="400" color="bg-brandBlue-400" textColor="text-white" />
          <ColorSwatch name="500" color="bg-brandBlue-500" textColor="text-white" />
          <ColorSwatch name="600" color="bg-brandBlue-600" textColor="text-white" />
          <ColorSwatch name="700" color="bg-brandBlue-700" textColor="text-white" />
          <ColorSwatch name="800" color="bg-brandBlue-800" textColor="text-white" />
          <ColorSwatch name="900" color="bg-brandBlue-900" textColor="text-white" />
        </div>
      </div>
      
      {/* Brand Gray Examples */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Brand Gray</h3>
        <div className="flex flex-wrap gap-4">
          <ColorSwatch name="50" color="bg-brandGray-50" textColor="text-brandGray-900" />
          <ColorSwatch name="100" color="bg-brandGray-100" textColor="text-brandGray-900" />
          <ColorSwatch name="200" color="bg-brandGray-200" textColor="text-brandGray-900" />
          <ColorSwatch name="300" color="bg-brandGray-300" textColor="text-brandGray-900" />
          <ColorSwatch name="400" color="bg-brandGray-400" textColor="text-white" />
          <ColorSwatch name="500" color="bg-brandGray-500" textColor="text-white" />
          <ColorSwatch name="600" color="bg-brandGray-600" textColor="text-white" />
          <ColorSwatch name="700" color="bg-brandGray-700" textColor="text-white" />
          <ColorSwatch name="800" color="bg-brandGray-800" textColor="text-white" />
          <ColorSwatch name="900" color="bg-brandGray-900" textColor="text-white" />
        </div>
      </div>
      
      {/* Usage Examples */}
      <div className="space-y-4 mt-8">
        <h3 className="text-xl font-semibold">Usage Examples</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-brandGreen-100 border-l-4 border-brandGreen-500 rounded">
            <p className="text-brandGreen-900">This is an info alert with brand green colors.</p>
          </div>
          
          <button className="px-4 py-2 bg-neonOrange-500 hover:bg-neonOrange-600 text-white rounded">
            Neon Orange Button
          </button>
          
          <div className="p-4 bg-brandBlue-50 text-brandBlue-800 border border-brandBlue-200 rounded">
            <h4 className="font-bold text-brandBlue-900">Card Title</h4>
            <p>This card uses brand blue for styling.</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-brandGreen-500"></div>
            <p>Status: Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for color swatches
function ColorSwatch({ name, color, textColor }) {
  return (
    <div className={`w-20 h-20 rounded flex items-center justify-center ${color} ${textColor}`}>
      {name}
    </div>
  );
}
