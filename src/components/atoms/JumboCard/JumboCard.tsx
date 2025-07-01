import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { useIsMobile } from '../../../hooks/useIsMobile';
import { PlusIcon } from '../../../icons';
import { MinusIcon } from '../../../icons/MinusIcon';
import { Button } from '../Button/Button';
import { Container } from '../Container/Container';
import {
  EndpointTitle,
  EndpointTitleProps
} from '../EndpointTitle/EndpointTitle';

interface JumboCardProps {
  title: string;
  badgeLabel: string;
  endpoints: EndpointTitleProps[];
}

export const JumboCard = ({ title, badgeLabel, endpoints }: JumboCardProps) => {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(!isMobile);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container className="flex flex-col gap-y-4 border p-2 md:p-4">
      <div className="flex justify-between text-2xl md:text-4xl">
        <h1 className="text-primary font-semibold dark:text-white/80">
          {title}
          <span className="mx-2 rounded-md bg-gray-100 px-2 dark:bg-white/10">
            {badgeLabel}
          </span>
        </h1>

        <Button
          ariaLabel={isExpanded ? 'Show less' : 'Show more'}
          icon={
            isExpanded ? (
              <MinusIcon className="size-4" />
            ) : (
              <PlusIcon className="size-4" />
            )
          }
          className="h-fit rounded-full p-1"
          onClick={toggleExpanded}
          isSecondary
        />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-y-2"
          >
            <span className="text-sm font-medium">Integrated endpoints</span>
            {endpoints.map((item) => (
              <EndpointTitle
                key={`${item.methodLabel}-${item.label}`}
                {...item}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};
