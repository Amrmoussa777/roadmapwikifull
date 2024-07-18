import { toast } from "@/components/ui/use-toast";
import { QUESTION_MARK } from "@public/icons/toast";

const useToast = () => {
	const errorToast = (errorTitle: string, description: string = "") => {
		toast({
			title: (
				<div className="flex-jc-c gap-2">
					<span
						style={{
							width: "34px",
							height: "34px",
							backgroundColor: "#ffffff33",
						}}
						className="flex-jc-c rounded-full bg-white/20"
					>
						{QUESTION_MARK}
					</span>{" "}
					{errorTitle}
				</div>
			),
			description,
			variant: "error",
		});
	};

	const warningToast = (warningTitle: string, description: string = "") => {
		toast({
			title: (
				<div className="flex-jc-c gap-2">
					<span
						style={{
							width: "34px",
							height: "34px",
							backgroundColor: "#ffffff33",
						}}
						className="w-[34px] h-[34px] flex-jc-c rounded-full bg-white/25"
					>
						{QUESTION_MARK}
					</span>{" "}
					{warningTitle}
				</div>
			),
			description,
			variant: "warning",
		});
	};

	const successToast = (successTitle: string, description: string = "") => {
		toast({
			title: (
				<div className="flex-jc-c gap-2">
					<span
						style={{
							width: "34px",
							height: "34px",
							backgroundColor: "#ffffff33",
						}}
						className="w-[34px] h-[34px] flex-jc-c rounded-full bg-white/25"
					>
						{QUESTION_MARK}
					</span>{" "}
					{successTitle}
				</div>
			),
			description,
			variant: "success",
		});
	};

	return {
		errorToast,
		warningToast,
		successToast,
	};
};

export { useToast };
