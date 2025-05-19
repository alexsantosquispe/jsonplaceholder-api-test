import { ChatIcon, HeartIcon, AvatarIcon } from '../../../icons';
import { PostComment } from '../../../services/api.types';

type CommentCardProps = Omit<PostComment, 'id' | 'postId'>;

export const CommentCard = ({ name, email, body }: CommentCardProps) => {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <div className="flex gap-2">
        <div className="h-10 w-10">
          <AvatarIcon className="size-10 text-gray-200 dark:text-white/20" />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex w-fit flex-col justify-center">
            <span className="text-sm font-light capitalize md:text-base">
              {name}
            </span>
            <span className="text-xs font-normal lowercase">{email}</span>
          </div>

          <div className="flex w-full flex-col gap-2">
            <p className="text-primary/65 text-xs leading-6 font-normal md:text-sm dark:text-white/65">
              {body}.
            </p>

            <div className="flex space-x-8 text-xs text-gray-400 dark:text-white/50">
              <div className="flex items-center gap-1">
                <HeartIcon className="cursor-pointer" />
                {/* This length is only used to simulate the counter */}
                {`${name.length}`}
              </div>
              <div className="flex items-center gap-1">
                <ChatIcon className="cursor-pointer" />
                {/* This length is only used to simulate the counter */}
                {`${email.length}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
