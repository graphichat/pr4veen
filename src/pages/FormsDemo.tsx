import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import * as React from "react";

type FormStep = 1 | 2 | 3;

export function FormsDemo() {
  const [currentStep, setCurrentStep] = React.useState<FormStep>(1);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    role: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    requirements: "",
    files: [] as File[],
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validateStep = (step: FormStep): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.company.trim()) newErrors.company = "Company is required";
      if (!formData.role) newErrors.role = "Role is required";
    }

    if (step === 2) {
      if (!formData.projectType) newErrors.projectType = "Project type is required";
      if (!formData.budget) newErrors.budget = "Budget is required";
      if (!formData.timeline) newErrors.timeline = "Timeline is required";
    }

    if (step === 3) {
      if (!formData.description.trim()) newErrors.description = "Description is required";
      if (formData.description.trim().length < 50) {
        newErrors.description = "Description must be at least 50 characters";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 3) {
        setCurrentStep((prev) => (prev + 1) as FormStep);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as FormStep);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(currentStep) && currentStep === 3) {
      // Form submission logic would go here
      alert("Form submitted successfully! (This is a demo)");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        files: Array.from(e.target.files || []),
      }));
    }
  };

  const steps = [
    { number: 1, title: "Personal Information" },
    { number: 2, title: "Project Details" },
    { number: 3, title: "Requirements" },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Advanced Form Builder</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Multi-step form with validation and dynamic fields
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/">← Back to Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                        currentStep >= step.number
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted-foreground/30 bg-background text-muted-foreground"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <span className="font-semibold">{step.number}</span>
                      )}
                    </div>
                    <span
                      className={`mt-2 text-xs font-medium ${
                        currentStep >= step.number ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 flex-1 transition-colors ${
                        currentStep > step.number ? "bg-primary" : "bg-muted-foreground/30"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Project Request Form</CardTitle>
              <CardDescription>
                Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <Field>
                        <FieldLabel htmlFor="name">
                          Full Name <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                          placeholder="John Doe"
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="email">
                          Email Address <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                          placeholder="john@example.com"
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                      </Field>
                      <div className="grid grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel htmlFor="company">
                            Company <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                            placeholder="Acme Inc."
                            className={errors.company ? "border-destructive" : ""}
                          />
                          {errors.company && <p className="mt-1 text-sm text-destructive">{errors.company}</p>}
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="role">
                            Role <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Select
                            value={formData.role}
                            onValueChange={(value) => setFormData((prev) => ({ ...prev, role: value }))}
                          >
                            <SelectTrigger id="role" className={errors.role ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="developer">Developer</SelectItem>
                              <SelectItem value="designer">Designer</SelectItem>
                              <SelectItem value="manager">Manager</SelectItem>
                              <SelectItem value="founder">Founder</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.role && <p className="mt-1 text-sm text-destructive">{errors.role}</p>}
                        </Field>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Details */}
                  {currentStep === 2 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <Field>
                        <FieldLabel htmlFor="projectType">
                          Project Type <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => setFormData((prev) => ({ ...prev, projectType: value }))}
                        >
                          <SelectTrigger id="projectType" className={errors.projectType ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web-app">Web Application</SelectItem>
                            <SelectItem value="mobile-app">Mobile Application</SelectItem>
                            <SelectItem value="saas">SaaS Platform</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.projectType && <p className="mt-1 text-sm text-destructive">{errors.projectType}</p>}
                      </Field>
                      <div className="grid grid-cols-2 gap-4">
                        <Field>
                          <FieldLabel htmlFor="budget">
                            Budget Range <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                          >
                            <SelectTrigger id="budget" className={errors.budget ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select budget" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-10k">Under $10k</SelectItem>
                              <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                              <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                              <SelectItem value="100k-plus">$100k+</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.budget && <p className="mt-1 text-sm text-destructive">{errors.budget}</p>}
                        </Field>
                        <Field>
                          <FieldLabel htmlFor="timeline">
                            Timeline <span className="text-destructive">*</span>
                          </FieldLabel>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}
                          >
                            <SelectTrigger id="timeline" className={errors.timeline ? "border-destructive" : ""}>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-3months">1-3 months</SelectItem>
                              <SelectItem value="3-6months">3-6 months</SelectItem>
                              <SelectItem value="6-12months">6-12 months</SelectItem>
                              <SelectItem value="12plus">12+ months</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.timeline && <p className="mt-1 text-sm text-destructive">{errors.timeline}</p>}
                        </Field>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Requirements */}
                  {currentStep === 3 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                      <Field>
                        <FieldLabel htmlFor="description">
                          Project Description <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                          placeholder="Describe your project in detail..."
                          rows={6}
                          className={errors.description ? "border-destructive" : ""}
                        />
                        <p className="mt-1 text-xs text-muted-foreground">
                          {formData.description.length}/50 minimum characters
                        </p>
                        {errors.description && <p className="mt-1 text-sm text-destructive">{errors.description}</p>}
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="requirements">Additional Requirements</FieldLabel>
                        <Textarea
                          id="requirements"
                          value={formData.requirements}
                          onChange={(e) => setFormData((prev) => ({ ...prev, requirements: e.target.value }))}
                          placeholder="Any specific requirements or constraints..."
                          rows={4}
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="files">Attach Files (Optional)</FieldLabel>
                        <div className="flex items-center gap-4">
                          <Input
                            id="files"
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="cursor-pointer"
                          />
                          {formData.files.length > 0 && (
                            <Badge variant="secondary">
                              {formData.files.length} file{formData.files.length > 1 ? "s" : ""} selected
                            </Badge>
                          )}
                        </div>
                      </Field>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBack}
                      disabled={currentStep === 1}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    {currentStep < 3 ? (
                      <Button type="button" onClick={handleNext}>
                        Next
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit">
                        Submit Form
                        <Check className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

