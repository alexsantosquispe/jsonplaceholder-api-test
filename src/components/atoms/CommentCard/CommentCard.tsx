import { ChatIcon, HeartIcon, AvatarIcon } from '../../../icons';
import { PostComment } from '../../../types';

type CommentCardProps = Omit<PostComment, 'id' | 'postId'>;

export const CommentCard = ({ name, email, body }: CommentCardProps) => {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <div className="flex gap-2">
        <div className="h-10 w-10">
          <AvatarIcon />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex w-fit flex-col justify-center">
            <span className="text-sm font-light capitalize md:text-base">
              {name}
            </span>
            <span className="text-xs font-normal lowercase">{email}</span>
          </div>

          <div className="flex w-full flex-col gap-2">
            <p className="text-[0.8125rem] leading-6 font-normal text-gray-800 md:text-sm">
              {body}.
            </p>

            <div className="flex space-x-8">
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <HeartIcon />
                {/* This length is only used to simulate the counter */}
                {`${name.length}`}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <ChatIcon className="text-gray-400" />
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
