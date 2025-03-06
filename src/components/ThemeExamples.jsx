/**
 * ThemeExamples component
 * 
 * This component demonstrates how to use the custom color palette
 * in your React components with Tailwind CSS classes.
 */

export default function ThemeExamples() {
  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-brandGray-900 p-8 rounded-lg shadow-lg space-y-10">
      <h2 className="text-3xl font-bold mb-6 text-brandGray-800 dark:text-white border-b pb-2 border-brandGray-200 dark:border-brandGray-700">Theme Color Examples</h2>
      
      {/* Brand Green Examples */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-brandGray-800 dark:text-white">Brand Green</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <ColorSwatch name="50" color="bg-brandGreen-50" textColor="text-brandGreen-900" hexCode="#ECFDF5" />
          <ColorSwatch name="100" color="bg-brandGreen-100" textColor="text-brandGreen-900" hexCode="#D1FAE5" />
          <ColorSwatch name="200" color="bg-brandGreen-200" textColor="text-brandGreen-900" hexCode="#A7F3D0" />
          <ColorSwatch name="300" color="bg-brandGreen-300" textColor="text-brandGreen-900" hexCode="#6EE7B7" />
          <ColorSwatch name="350" color="bg-brandGreen-350" textColor="text-white" hexCode="#51DDA8" />
          <ColorSwatch name="400" color="bg-brandGreen-400" textColor="text-white" hexCode="#34D399" />
          <ColorSwatch name="500" color="bg-brandGreen-500" textColor="text-white" hexCode="#10B981" />
          <ColorSwatch name="600" color="bg-brandGreen-600" textColor="text-white" hexCode="#059669" />
          <ColorSwatch name="700" color="bg-brandGreen-700" textColor="text-white" hexCode="#047857" />
          <ColorSwatch name="800" color="bg-brandGreen-800" textColor="text-white" hexCode="#065F46" />
          <ColorSwatch name="900" color="bg-brandGreen-900" textColor="text-white" hexCode="#064E3B" />
          <ColorSwatch name="950" color="bg-brandGreen-950" textColor="text-white" hexCode="#015338" />
        </div>
      </div>
      
      {/* Neon Orange Examples */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-brandGray-800 dark:text-white">Neon Orange</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <ColorSwatch name="50" color="bg-neonOrange-50" textColor="text-neonOrange-900" hexCode="#FFF2E8" />
          <ColorSwatch name="100" color="bg-neonOrange-100" textColor="text-neonOrange-900" hexCode="#FFE6D1" />
          <ColorSwatch name="200" color="bg-neonOrange-200" textColor="text-neonOrange-900" hexCode="#FFC199" />
          <ColorSwatch name="300" color="bg-neonOrange-300" textColor="text-neonOrange-900" hexCode="#FF9B66" />
          <ColorSwatch name="400" color="bg-neonOrange-400" textColor="text-white" hexCode="#FF7A33" />
          <ColorSwatch name="500" color="bg-neonOrange-500" textColor="text-white" hexCode="#FF6B00" />
          <ColorSwatch name="600" color="bg-neonOrange-600" textColor="text-white" hexCode="#E66000" />
          <ColorSwatch name="700" color="bg-neonOrange-700" textColor="text-white" hexCode="#CC5500" />
          <ColorSwatch name="800" color="bg-neonOrange-800" textColor="text-white" hexCode="#993F00" />
          <ColorSwatch name="900" color="bg-neonOrange-900" textColor="text-white" hexCode="#662A00" />
        </div>
      </div>
      
      {/* Brand Blue Examples */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-brandGray-800 dark:text-white">Brand Blue</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <ColorSwatch name="50" color="bg-brandBlue-50" textColor="text-brandBlue-900" hexCode="#EBF8FF" />
          <ColorSwatch name="100" color="bg-brandBlue-100" textColor="text-brandBlue-900" hexCode="#D1EEFC" />
          <ColorSwatch name="200" color="bg-brandBlue-200" textColor="text-brandBlue-900" hexCode="#A7D8F0" />
          <ColorSwatch name="300" color="bg-brandBlue-300" textColor="text-brandBlue-900" hexCode="#7ECBF4" />
          <ColorSwatch name="400" color="bg-brandBlue-400" textColor="text-white" hexCode="#38BDF8" />
          <ColorSwatch name="500" color="bg-brandBlue-500" textColor="text-white" hexCode="#0EA5E9" />
          <ColorSwatch name="600" color="bg-brandBlue-600" textColor="text-white" hexCode="#0284C7" />
          <ColorSwatch name="700" color="bg-brandBlue-700" textColor="text-white" hexCode="#0369A1" />
          <ColorSwatch name="800" color="bg-brandBlue-800" textColor="text-white" hexCode="#075985" />
          <ColorSwatch name="900" color="bg-brandBlue-900" textColor="text-white" hexCode="#0C4A6E" />
        </div>
      </div>
      
      {/* Brand Gray Examples */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-brandGray-800 dark:text-white">Brand Gray</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <ColorSwatch name="50" color="bg-brandGray-50" textColor="text-brandGray-900" hexCode="#FAFAFA" />
          <ColorSwatch name="100" color="bg-brandGray-100" textColor="text-brandGray-900" hexCode="#F4F4F5" />
          <ColorSwatch name="200" color="bg-brandGray-200" textColor="text-brandGray-900" hexCode="#E4E4E7" />
          <ColorSwatch name="300" color="bg-brandGray-300" textColor="text-brandGray-900" hexCode="#D4D4D8" />
          <ColorSwatch name="400" color="bg-brandGray-400" textColor="text-white" hexCode="#A1A1AA" />
          <ColorSwatch name="500" color="bg-brandGray-500" textColor="text-white" hexCode="#71717A" />
          <ColorSwatch name="600" color="bg-brandGray-600" textColor="text-white" hexCode="#52525B" />
          <ColorSwatch name="700" color="bg-brandGray-700" textColor="text-white" hexCode="#3F3F46" />
          <ColorSwatch name="800" color="bg-brandGray-800" textColor="text-white" hexCode="#27272A" />
          <ColorSwatch name="900" color="bg-brandGray-900" textColor="text-white" hexCode="#18181B" />
        </div>
      </div>
      
      {/* Usage Examples */}
      <div className="space-y-6 mt-8">
        <h3 className="text-2xl font-semibold text-brandGray-800 dark:text-white border-b pb-2 border-brandGray-200 dark:border-brandGray-700">Usage Examples</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Alerts */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-brandGray-800 dark:text-white">Alerts</h4>
            
            <div className="p-4 bg-brandGreen-100 dark:bg-brandGreen-900/30 border-l-4 border-brandGreen-500 rounded">
              <p className="text-brandGreen-900 dark:text-brandGreen-200">This is an info alert with brand green colors.</p>
            </div>
            
            <div className="p-4 bg-neonOrange-100 dark:bg-neonOrange-900/30 border-l-4 border-neonOrange-500 rounded">
              <p className="text-neonOrange-900 dark:text-neonOrange-200">This is a warning alert with neon orange colors.</p>
            </div>
          </div>
          
          {/* Buttons */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-brandGray-800 dark:text-white">Buttons</h4>
            
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-brandGreen-500 hover:bg-brandGreen-600 text-white rounded transition-colors">
                Green Button
              </button>
              
              <button className="px-4 py-2 bg-neonOrange-500 hover:bg-neonOrange-600 text-white rounded transition-colors">
                Orange Button
              </button>
              
              <button className="px-4 py-2 bg-brandBlue-500 hover:bg-brandBlue-600 text-white rounded transition-colors">
                Blue Button
              </button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-white hover:bg-brandGray-100 text-brandGreen-600 border border-brandGreen-500 rounded transition-colors dark:bg-transparent dark:text-brandGreen-400 dark:border-brandGreen-500 dark:hover:bg-brandGreen-900/20">
                Outlined Green
              </button>
              
              <button className="px-4 py-2 bg-white hover:bg-brandGray-100 text-neonOrange-600 border border-neonOrange-500 rounded transition-colors dark:bg-transparent dark:text-neonOrange-400 dark:border-neonOrange-500 dark:hover:bg-neonOrange-900/20">
                Outlined Orange
              </button>
            </div>
          </div>
        </div>
        
        {/* Cards */}
        <div className="mt-6 space-y-4">
          <h4 className="text-lg font-medium text-brandGray-800 dark:text-white">Cards</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white dark:bg-brandGray-800 text-brandGray-800 dark:text-white border border-brandGray-200 dark:border-brandGray-700 rounded shadow-md">
              <h4 className="font-bold text-brandGray-900 dark:text-white border-b pb-2 mb-3 border-brandGray-200 dark:border-brandGray-700">Basic Card</h4>
              <p className="text-brandGray-700 dark:text-brandGray-300">A standard card component with basic styling.</p>
            </div>
            
            <div className="p-4 bg-brandBlue-50 dark:bg-brandBlue-900/20 text-brandBlue-800 dark:text-brandBlue-200 border border-brandBlue-200 dark:border-brandBlue-800 rounded shadow-md">
              <h4 className="font-bold text-brandBlue-900 dark:text-brandBlue-100">Blue Card</h4>
              <p className="mt-2">This card uses brand blue for styling.</p>
            </div>
            
            <div className="p-4 bg-brandGreen-50 dark:bg-brandGreen-900/20 text-brandGreen-800 dark:text-brandGreen-200 border border-brandGreen-200 dark:border-brandGreen-800 rounded shadow-md">
              <h4 className="font-bold text-brandGreen-900 dark:text-brandGreen-100">Green Card</h4>
              <p className="mt-2">This card uses brand green for styling.</p>
            </div>
          </div>
        </div>
        
        {/* Status Indicators */}
        <div className="mt-6 space-y-4">
          <h4 className="text-lg font-medium text-brandGray-800 dark:text-white">Status Indicators</h4>
          
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-brandGreen-500"></div>
              <p className="text-brandGray-700 dark:text-brandGray-300">Active</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-neonOrange-500"></div>
              <p className="text-brandGray-700 dark:text-brandGray-300">Warning</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-brandBlue-500"></div>
              <p className="text-brandGray-700 dark:text-brandGray-300">Information</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-brandGray-500"></div>
              <p className="text-brandGray-700 dark:text-brandGray-300">Inactive</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for color swatches
function ColorSwatch({ name, color, textColor, hexCode }) {
  return (
    <div className="space-y-1">
      <div className={`h-16 rounded-md flex items-center justify-center border border-brandGray-200 dark:border-brandGray-700 ${color} ${textColor} shadow-sm`}>
        {name}
      </div>
      <div className="text-xs text-center text-brandGray-600 dark:text-brandGray-400">{hexCode}</div>
    </div>
  );
}
