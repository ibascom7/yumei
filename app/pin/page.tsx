'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PinScreen() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const correctPin = '1234'; // You can change this to your desired PIN

  const handleDigitClick = (digit: string) => {
    if (pin.length < 4) {
      const newPin = pin + digit;
      setPin(newPin);
      setError(false);

      // Auto-check when 4 digits are entered
      if (newPin.length === 4) {
        setTimeout(() => {
          if (newPin === correctPin) {
            router.push('/schedule');
          } else {
            setError(true);
            setTimeout(() => {
              setPin('');
              setError(false);
            }, 1000);
          }
        }, 200);
      }
    }
  };

  const handleClear = () => {
    setPin('');
    setError(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
          Enter PIN
        </h1>

        {/* PIN Display */}
        <div className="flex justify-center gap-4 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`w-16 h-16 rounded-full border-4 flex items-center justify-center text-2xl font-bold transition-all ${
                error
                  ? 'border-red-500 bg-red-100 text-red-600'
                  : pin.length > index
                  ? 'border-green-600 bg-green-100 text-green-800'
                  : 'border-gray-300 bg-gray-50 text-gray-400'
              }`}
            >
              {pin.length > index ? '•' : ''}
            </div>
          ))}
        </div>

        {error && (
          <p className="text-red-600 text-center mb-4 font-semibold">
            Incorrect PIN
          </p>
        )}

        {/* Number Pad */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
            <button
              key={digit}
              onClick={() => handleDigitClick(digit.toString())}
              disabled={pin.length >= 4}
              className="h-16 rounded-lg bg-green-100 hover:bg-green-200 text-green-800 text-2xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {digit}
            </button>
          ))}
          <div className="h-16"></div>
          <button
            onClick={() => handleDigitClick('0')}
            disabled={pin.length >= 4}
            className="h-16 rounded-lg bg-green-100 hover:bg-green-200 text-green-800 text-2xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            0
          </button>
          <button
            onClick={handleClear}
            className="h-16 rounded-lg bg-red-100 hover:bg-red-200 text-red-800 text-xl font-bold transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
