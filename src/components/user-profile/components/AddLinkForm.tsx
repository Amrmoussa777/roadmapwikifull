import DropSelect from "@/components/create-roadmap/preview-roadmap/components/RoadmapInfoSelect";
import { useAddLinkForm } from "@/components/user-profile/hooks/useAddLinkForm";
import { SOCIAL_MEDIA_ICONS_OJB } from "@/config/socialMediaIcons";
import { ADD_ICON } from "@public/icons/userProfile";
import React from "react";

const AddLinkForm = () => {
	const {
		isAdding,
		setSocialMediaActive,
		changeLinkValue,
		handleSubmitSocialMediaLink,
		linkValue,
		validationError,
		socialMediaActive,
		loading,
	} = useAddLinkForm();

	return (
		<form className="mt-6">
			{isAdding ? (
				<>
					<div className="grid grid-cols-2 gap-4">
						<div>
							<DropSelect
								label={{ id: "socialMediaIcon", name: "Social media icon" }}
								activeOption={
									<span className="flex-jc-c gap-1 sm:gap-2 sm:text-[18px] [&>svg]:fill-red-500">
										<span
											style={{ backgroundColor: "" }}
											className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg text-primary-ultramarineBlue"
										>
											{socialMediaActive ? socialMediaActive.icon : "-"}
										</span>

										<span>
											{socialMediaActive
												? socialMediaActive.name?.toString().replace("_", " ")
												: "-"}
										</span>
									</span>
								}
							>
								{SOCIAL_MEDIA_ICONS_OJB.map(item => (
									<button
										type="button"
										key={item.name}
										onClick={() => setSocialMediaActive(item)}
										className="flex items-center gap-2 !px-4 sm:gap-2 !text-[14px] md:!text-[16px]"
									>
										<span
											style={{ backgroundColor: "" }}
											className="w-[25px] sm:w-[32px] h-[25px] sm:h-[32px] flex-jc-c rounded-lg [&>svg]:text-primary-ultramarineBlue"
										>
											{item.icon}
										</span>{" "}
										<span>{item.name.replace("_", " ")}</span>
									</button>
								))}
							</DropSelect>
						</div>

						<div>
							<label htmlFor={"socialMediaLink"} className="text-[#666666]">
								Social media link*
							</label>
							<input
								id="socialMediaLink"
								type="text"
								placeholder="e.g https://facebook.com/"
								value={linkValue}
								onChange={changeLinkValue}
								className={`roadmap-info-select text-[16px] sm:text-[18px]`}
							/>
						</div>
					</div>

					{validationError ? (
						<p className="text-red-500 text-xs mt-1">{validationError}</p>
					) : null}
				</>
			) : null}

			<button
				onClick={handleSubmitSocialMediaLink}
				disabled={loading}
				className="flex items-center gap-2 mt-8 font-inter text-[16px] text-primary-ultramarineBlue group"
			>
				<span className="w-[40px] h-[40px] flex-jc-c bg-primary-ultramarineBlue text-white border border-transparent group-hover:bg-white group-hover:text-primary-ultramarineBlue group-hover:border-primary-ultramarineBlue group-hover:shadow-md rounded-full transition duration-200">
					{ADD_ICON}
				</span>{" "}
				{isAdding ? "Save link" : "Add link"}
			</button>
		</form>
	);
};

export default AddLinkForm;
