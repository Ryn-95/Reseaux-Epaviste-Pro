"use client";

import { pushDataLayer } from "@/lib/tracking";

type TrackedPhoneLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  trackingLocation: string;
  phoneHref: string; // ex: "tel:+33184173218"
};

export default function TrackedPhoneLink({
  trackingLocation,
  phoneHref,
  onClick,
  ...props
}: TrackedPhoneLinkProps) {
  return (
    <a
      {...props}
      href={phoneHref}
      onClick={(e) => {
        pushDataLayer({
          event: "phone_click",
          location: trackingLocation,
          href: phoneHref,
        });
        onClick?.(e);
      }}
    />
  );
}

