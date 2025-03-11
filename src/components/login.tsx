import React, {
    useState,
    ChangeEvent,
    FormEvent,

    FC,
    ReactNode,
} from 'react';
import { motion } from 'framer-motion';
import {
    LogIn,
    UserPlus,
    ChevronDown,
    User,
    Building,
    Users,
} from 'lucide-react';

// Types
type TUserType = '' | 'farmer' | 'government' | 'expert';

// Reusable form components
interface FormInputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}

const FormInput: FC<FormInputProps> = ({
    label,
    type,
    name,
    value,
    onChange,
    placeholder = '',
    required = false,
}) => (
    <div>
        <label
            htmlFor={name}
            className="block text-sm font-medium text-gray-700 mb-1"
        >
            {label}
        </label>
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
        />
    </div>
);

interface UserTypeSelectorProps {
    userType: TUserType;
    setUserType: (type: TUserType) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const UserTypeSelector: FC<UserTypeSelectorProps> = ({
    userType,
    setUserType,
    isOpen,
    setIsOpen,
}) => {
    const userTypes = [
        { id: 'farmer', name: 'Farmer', icon: <User className="h-5 w-5" /> },
        {
            id: 'government',
            name: 'Government Official',
            icon: <Building className="h-5 w-5" />,
        },
        {
            id: 'expert',
            name: 'Retailer',
            icon: <Users className="h-5 w-5" />,
        },
    ] as const;

    return (
        <div className="relative">
            <label
                htmlFor="user-type"
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                I am a
            </label>
            <div className="relative">
                <button
                    type="button"
                    className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {userType ? (
                        <div className="flex items-center">
                            {userTypes.find((type) => type.id === userType)?.icon}
                            <span className="ml-3 block truncate">
                                {userTypes.find((type) => type.id === userType)?.name}
                            </span>
                        </div>
                    ) : (
                        <span className="block truncate text-gray-500">
                            Select your role
                        </span>
                    )}
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                    </span>
                </button>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1"
                    >
                        <ul tabIndex={-1} role="listbox" aria-labelledby="user-type">
                            {userTypes.map((type) => (
                                <li
                                    key={type.id}
                                    role="option"
                                    className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-green-50"
                                    onClick={() => {
                                        setUserType(type.id);
                                        setIsOpen(false);
                                    }}
                                >
                                    <div className="flex items-center">
                                        {type.icon}
                                        <span className="ml-3 block font-medium">{type.name}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

interface SubmitButtonProps {
    text: string;
    icon: ReactNode;
    isDisabled?: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ text, icon, isDisabled }) => (
    <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isDisabled}
        className={`group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-white ${!isDisabled
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-gray-400 cursor-not-allowed'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors`}
    >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {icon}
        </span>
        {text}
    </motion.button>
);

// Types for Login form
interface LoginFormData {
    email: string;
    password: string;
}

// Login Page Component
export const LoginPage: FC = () => {
    const [userType, setUserType] = useState<TUserType>('');
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Login attempt:', { userType, ...formData });
        // Add your login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg"
            >
                <div className="text-center">
                    <div className="flex justify-center">
                        <img src="Logo_Main-removebg-preview.png" width={75} height={50} alt="" />
                    </div>
                    <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                        Welcome back
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Sign in to your Agripulse AI account
                    </p>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm space-y-4">
                        <UserTypeSelector
                            userType={userType}
                            setUserType={setUserType}
                            isOpen={isDropdownOpen}
                            setIsOpen={setIsDropdownOpen}
                        />

                        <FormInput
                            label="Email address"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@agriculture.com"
                            required
                        />

                        <FormInput
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-green-600 hover:text-green-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <SubmitButton
                        text="Sign in"
                        icon={<LogIn className="h-5 w-5 text-green-100" />}
                        isDisabled={!userType}
                    />
                </form>

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a
                            href="/register"
                            className="font-medium text-green-600 hover:text-green-500"
                        >
                            Sign up
                        </a>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

// Types for Register form
interface RegisterFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    additionalFields: {
        [key: string]: string;
    };
}

// Register Page Component
export const RegisterPage: FC = () => {
    const [userType, setUserType] = useState<TUserType>('');
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<RegisterFormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        additionalFields: {},
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // If it's a nested field like "additionalFields.x"
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData((prev) => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value,
                },
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Registration attempt:', { userType, ...formData });
        // Add your registration logic here
    };

    // Define the fields for each user type
    const userTypeFields: Record<
        Exclude<TUserType, ''>,
        { name: string; label: string; type: string; placeholder: string }[]
    > = {
        farmer: [
            {
                name: 'additionalFields.farmName',
                label: 'Farm Name',
                type: 'text',
                placeholder: '',
            },
            {
                name: 'additionalFields.cropTypes',
                label: 'Primary Crops',
                type: 'text',
                placeholder: 'e.g. Rice, Wheat, Vegetables',
            },
            {
                name: 'additionalFields.farmSize',
                label: 'Farm Size (acres)',
                type: 'text',
                placeholder: '',
            },
        ],
        government: [
            {
                name: 'additionalFields.department',
                label: 'Department',
                type: 'text',
                placeholder: 'e.g. Ministry of Agriculture',
            },
            {
                name: 'additionalFields.position',
                label: 'Position',
                type: 'text',
                placeholder: 'e.g. Regional Director',
            },
            {
                name: 'additionalFields.governmentID',
                label: 'Government ID',
                type: 'text',
                placeholder: '',
            },
        ],
        expert: [
            {
                name: 'additionalFields.specialization',
                label: 'Specialization',
                type: 'text',
                placeholder: 'e.g. Soil Science, Crop Disease',
            },
            {
                name: 'additionalFields.experience',
                label: 'Years of Experience',
                type: 'number',
                placeholder: '',
            },
            {
                name: 'additionalFields.credentials',
                label: 'Credentials',
                type: 'textarea',
                placeholder: 'e.g. PhD in Agricultural Science, Certifications',
            },
        ],
    };

    // Common fields for all user types
    const commonFields = [
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true,
            placeholder: '',
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            required: true,
            placeholder: '',
        },
        {
            name: 'email',
            label: 'Email address',
            type: 'email',
            required: true,
            placeholder: 'example@agriculture.com',
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            required: true,
            placeholder: '••••••••',
        },
        {
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
            required: true,
            placeholder: '••••••••',
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-xl shadow-lg"
                >
                    <div className="text-center">
                        <div className="flex justify-center">
                            <img src="Logo_Main-removebg-preview.png" width={80} height={50} alt="" />
                        </div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Join Agripulse AI
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Create your account to get started
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <UserTypeSelector
                            userType={userType}
                            setUserType={setUserType}
                            isOpen={isDropdownOpen}
                            setIsOpen={setIsDropdownOpen}
                        />

                        {/* Common Registration Fields */}
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                {commonFields.slice(0, 2).map((field) => (
                                    <FormInput
                                        key={field.name}
                                        label={field.label}
                                        type={field.type}
                                        name={field.name}
                                        value={(formData as any)[field.name]} // Type-cast or index signature
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                    />
                                ))}
                            </div>

                            {commonFields.slice(2).map((field) => (
                                <FormInput
                                    key={field.name}
                                    label={field.label}
                                    type={field.type}
                                    name={field.name}
                                    value={(formData as any)[field.name]} // Type-cast or index signature
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                />
                            ))}
                        </div>

                        {/* User Type Specific Fields */}
                        {userType && (
                            <div className="space-y-4 border-t border-gray-200 pt-4 mt-4">
                                <h3 className="text-lg font-medium text-gray-900">
                                    {userType === 'farmer'
                                        ? 'Farmer Details'
                                        : userType === 'government'
                                            ? 'Government Official Details'
                                            : 'Retailer Details'}
                                </h3>

                                {userTypeFields[userType]?.map((field) => (
                                    <div key={field.name}>
                                        <label
                                            htmlFor={field.name}
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            {field.label}
                                        </label>

                                        {field.type !== 'textarea' ? (
                                            <input
                                                type={field.type}
                                                id={field.name}
                                                name={field.name}
                                                value={
                                                    // If it's an additional field
                                                    field.name.includes('.')
                                                        ? formData.additionalFields[
                                                        field.name.split('.')[1]
                                                        ] || ''
                                                        : (formData as any)[field.name] || ''
                                                }
                                                onChange={handleChange}
                                                placeholder={field.placeholder}
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                            />
                                        ) : (
                                            <textarea
                                                id={field.name}
                                                name={field.name}
                                                rows={3}
                                                value={
                                                    field.name.includes('.')
                                                        ? formData.additionalFields[
                                                        field.name.split('.')[1]
                                                        ] || ''
                                                        : (formData as any)[field.name] || ''
                                                }
                                                onChange={handleChange}
                                                placeholder={field.placeholder}
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="flex items-center">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                I agree to the{' '}
                                <a href="#" className="text-green-600 hover:text-green-500">
                                    Terms of Service
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-green-600 hover:text-green-500">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        <SubmitButton
                            text="Create Account"
                            icon={<UserPlus className="h-5 w-5 text-green-100" />}
                            isDisabled={!userType}
                        />
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <a href="/login" className="font-medium text-green-600 hover:text-green-500">
                                Sign in
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
