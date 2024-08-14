"use client";

import React from "react";
import Link from "next/link";

import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";

import { Spinner } from "./spinner";
import { BreadCrumbsProvider } from "./BreadCrumbs-provider";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList } from "./ui/breadcrumb";

interface BreadcrumbsProps {
  withHome?: boolean;
}

interface BreadcrumbsContainerProps {
  children: React.ReactNode;
  separator?: string | React.ReactNode;
}

const BreadcrumbsContainer = ({
  children,
  separator = "/",
}: BreadcrumbsContainerProps) => (
  <>
    {React.Children.map(children, (child, index) => (
      <React.Fragment key={index}>
        {child}
        {index < React.Children.count(children) - 1 ? (
          <span>{separator}</span>
        ) : null}
      </React.Fragment>
    ))}
  </>
);

export const BreadCrumbs = ({ withHome = false }: BreadcrumbsProps) => {
  const paths = usePathname();

  const pathNames = paths.split("/").filter((path) => path);
  const pathItems = pathNames.map((path, i) => ({
    name: path,
    path: pathNames.slice(0, i + 1).join("/"),
  }));

  return (
    <BreadCrumbsProvider>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbsContainer>
            <BreadcrumbItem>
              <Link
                href="#"
                passHref
                className="uppercase transition-colors hover:text-foreground"
              >
                <span className={cn(paths === "/" ? "font-bold" : "")}>
                  Token Create
                </span>
              </Link>
            </BreadcrumbItem>
            {withHome ? (
              <BreadcrumbItem>
                <Link
                  href="/"
                  passHref
                  className="transition-colors hover:text-foreground"
                >
                  <span
                    className={cn(
                      paths === "/" ? "font-bold text-foreground" : "",
                    )}
                  >
                    Home
                  </span>
                </Link>
              </BreadcrumbItem>
            ) : null}
            {pathItems.map((item, index) => (
              <BreadcrumbItem key={index}>
                <Link
                  href={`/${item.path}`}
                  passHref
                  className="transition-colors hover:text-foreground"
                >
                  {item.name === "loading" ? (
                    <Spinner className="h-4 w-4" />
                  ) : (
                    <span
                      className={cn(
                        paths === item.path ? "font-bold text-foreground" : "",
                      )}
                    >
                      {item.name}
                    </span>
                  )}
                </Link>
              </BreadcrumbItem>
            ))}
          </BreadcrumbsContainer>
        </BreadcrumbList>
      </Breadcrumb>
    </BreadCrumbsProvider>
  );
};
