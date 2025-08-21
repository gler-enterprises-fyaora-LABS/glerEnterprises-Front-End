import React from 'react';

interface TermsAndConditionsDialogProps {
    onClose: () => void;
}

const TermsAndConditionsDialog: React.FC<TermsAndConditionsDialogProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    aria-label="Close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <h2 className="mb-4 text-2xl font-bold">Terms and Conditions</h2>
                <div className="prose max-h-96 overflow-y-auto">
                    <p>
                        Welcome to our website. If you continue to browse and use this
                        website, you are agreeing to comply with and be bound by the
                        following terms and conditions of use, which together with our
                        privacy policy govern our relationship with you in relation to this
                        website.
                    </p>
                    <p>
                        The term 'us' or 'we' refers to the owner of the website. The
                        term 'you' refers to the user or viewer of our website.
                    </p>
                    <h3 className="mt-4 font-bold">
                        The use of this website is subject to the following terms of use:
                    </h3>
                    <ul className="list-disc pl-5">
                        <li>
                            The content of the pages of this website is for your general
                            information and use only. It is subject to change without
                            notice.
                        </li>
                        <li>
                            Neither we nor any third parties provide any warranty or
                            guarantee as to the accuracy, timeliness, performance,
                            completeness or suitability of the information and materials
                            found or offered on this website for any particular purpose.
                            You acknowledge that such information and materials may contain
                            inaccuracies or errors and we expressly exclude liability for
                            any such inaccuracies or errors to the fullest extent permitted
                            by law.
                        </li>
                        <li>
                            Your use of any information or materials on this website is
                            entirely at your own risk, for which we shall not be liable.
                            It shall be your own responsibility to ensure that any
                            products, services or information available through this
                            website meet your specific requirements.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditionsDialog;